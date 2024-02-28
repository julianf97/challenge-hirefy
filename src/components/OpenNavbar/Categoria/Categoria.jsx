/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function Categoria({ text, isOpen, toggle, hasSubcategories }) {
  return (
    <li onClick={toggle} className={`liCategoria ${hasSubcategories ? 'liCategoriaArrow' : ''}`}>
      {text}
      {hasSubcategories && (
        <div className='contenedorArrowCategoria'>
          <FontAwesomeIcon className='iconChevron' icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
      )}
    </li>
  );
}