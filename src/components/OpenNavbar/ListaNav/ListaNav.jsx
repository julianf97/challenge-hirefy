/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDown,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ListaNav({ items }) {
  const [showChildren, setShowChildren] = useState({});
  const [arrowIcons, setArrowIcons] = useState({});

  const toggleChildren = (index) => {
    setShowChildren(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));

    setArrowIcons(prevIcons => ({
      ...prevIcons,
      [index]: showChildren[index] ? faAngleDown : faAngleUp
    }));
  };

  const renderMenuItem = (menuItem, index, parentIndex = null) => {
    const logoItemClass = menuItem.title === 'Categories' ? ' categories' : 'logoItem';
    const isChildOfCategory = parentIndex !== null;

    return (
      <div className={logoItemClass} key={menuItem.title}>
        {menuItem.title !== 'Categories' && (
          <div className='logoItemsContainer'>
            {menuItem.icon && <FontAwesomeIcon icon={menuItem.icon} className="menuItemIcon" />}
          </div>
        )}
        <div onClick={() => toggleChildren(index)}>
          {menuItem.title === 'Categories' ? (
            <div className="categoriesContainer">
              <div className='internoCategories'>
                <div className='logoItemsContainer'>
                  {menuItem.icon && <FontAwesomeIcon icon={menuItem.icon} className="menuItemIcon" />}
                </div>
                <span>{menuItem.title}</span>
              </div>
              <div className='contenedorDownArrow'>
                <FontAwesomeIcon icon={arrowIcons[index] || faAngleDown} className="menuItemIcon" />
              </div>
            </div>   
          ) : (
            <Link to={menuItem.link}>{menuItem.title}</Link>
          )}
        </div>
        <div className='contenedorUlChildren'>
          {showChildren[index] && menuItem.children && (
            <ul className={`ulChildren${isChildOfCategory ? ' childOfCategory' : ''}`}>
              {menuItem.children.map((childItem, childIndex) => (
                <li className={childItem.children ? 'liWhitChildren' : ''} key={`${childItem.title}-${childIndex}`}>
                  {childItem.children ? (
                    <div className='contenedorDownArrow'>
                      <FontAwesomeIcon icon={arrowIcons[`${index}-${childIndex}`] || faAngleDown} className="menuItemIcon" onClick={() => toggleChildren(`${index}-${childIndex}`)} />
                    </div>
                  ) : null}
                  <div className='contenedorChildTitleIcon'>
                    {renderMenuItem(childItem, `${index}-${childIndex}`, index)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="contenedorLista">
      <ul className="listaUl">
        {items.map((menuItem, index) => (
          <li key={`${menuItem.title}-${index}`}>
            {renderMenuItem(menuItem, `${index}`)}
          </li>
        ))}
      </ul>
    </div>
  );
}
