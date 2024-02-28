import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { categoriesText, loremIpsumText } from '../../../contants/contants';
import Categoria from '../Categoria/Categoria';
import CategoriaInterna from '../CategoriaInterna/CategoriaInterna';

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
      {categoriasAbiertas && (
        <motion.ul
          className='categoriasAbiertas'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Categoria text={loremIpsumText} />
          <Categoria text={loremIpsumText} />
          <Categoria
            text={loremIpsumText}
            isOpen={categoriasAbiertasInternas}
            toggle={toggleCategoriasInternas}
            hasSubcategories={true}
          />
          {categoriasAbiertasInternas && <CategoriaInterna />}
          <Categoria text={loremIpsumText} />
          <Categoria
            text={loremIpsumText}
            isOpen={categoriasAbiertasInternas2}
            toggle={toggleCategoriasInternas2}
            hasSubcategories={true}
          />
          {categoriasAbiertasInternas2 && <CategoriaInterna />}
        </motion.ul>
      )}
    </>
  );
}

export default LiCategories;