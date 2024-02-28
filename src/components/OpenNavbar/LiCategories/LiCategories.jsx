import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { categoriesText } from '../../../contants/contants';
import CategoriaAbierta from '../CategoriaAbierta/CategoriaAbierta';

function LiCategories() {
  const [categoriasAbiertas, setCategoriasAbiertas] = useState(false);
  const [categoriasAbiertasInternas, setCategoriasAbiertasInternas] = useState(false);
  const [categoriasAbiertasInternas2, setCategoriasAbiertasInternas2] = useState(false);

  const toggleCategorias = () => {
    setCategoriasAbiertas(!categoriasAbiertas);
  };

  const toggleCategoriasInternas = () => {
    setCategoriasAbiertasInternas(!categoriasAbiertasInternas);
  };

  const toggleCategoriasInternas2 = () => {
    setCategoriasAbiertasInternas2(!categoriasAbiertasInternas2);
  };

  return (
    <>
      <li className='liCategories' onClick={toggleCategorias}>
        <div className='textoYlogo'>
          <div className='liLogo'>
            <FontAwesomeIcon className='iconHouse' icon={faShapes} />
          </div>
          {categoriesText}
        </div>
        <div className='contenedorArrowDown'>
          <FontAwesomeIcon
            className='iconChevron'
            icon={categoriasAbiertas ? faChevronUp : faChevronDown}
          />
        </div>
      </li>
      <CategoriaAbierta
        categoriasAbiertas={categoriasAbiertas}
        categoriasAbiertasInternas={categoriasAbiertasInternas}
        categoriasAbiertasInternas2={categoriasAbiertasInternas2}
        toggleCategoriasInternas={toggleCategoriasInternas}
        toggleCategoriasInternas2={toggleCategoriasInternas2}
      />
    </>
  );
}

export default LiCategories;
