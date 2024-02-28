/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { categoriesText } from '../../../contants/contants';
import CategoriaAbierta from '../CategoriaAbierta/CategoriaAbierta';

function LiCategories({ 
  categoriasAbiertas, 
  categoriasAbiertasInternas, 
  categoriasAbiertasInternas2, 
  toggleCategoriasInternas, 
  toggleCategoriasInternas2,
  toggleCategorias
}) {

  return (
    <>
      <li className={`liCategories ${categoriasAbiertas ? "categoriasAbiertasEstilo" : "claseCuandoCerrado"}`} onClick={toggleCategorias}>
        <div className='textoYlogo'>
          <div className='liLogo'>
            <FontAwesomeIcon className='iconCategories' icon={faShapes} />
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
