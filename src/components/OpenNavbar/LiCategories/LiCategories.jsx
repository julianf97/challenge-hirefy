import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { categoriesText } from '../../../contants/contants';

export default function LiCategories() {
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
          <div className="liLogo">
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
          <li className='liCategoria'>Lorem Ipsum</li>
          <li className='liCategoria'>Lorem Ipsum</li>
          <li onClick={toggleCategoriasInternas} className='liCategoria liCategoriaArrow'>
            Lorem Ipsum
            <div className='contenedorArrowCategoria'>
              <FontAwesomeIcon 
                className='iconChevron' 
                icon={categoriasAbiertasInternas ? faChevronUp : faChevronDown} 
              />
            </div>
          </li>
          { categoriasAbiertasInternas && (
            <motion.div 
              className='contenedorCategoriaAbiertaInterna'
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }} 
            >
              <ul className='categoriaInternaAbierta'>
                <li className='liCategoria'>Lorem Ipsum</li>
                <li className='liCategoria'>Lorem Ipsum</li>
              </ul>
            </motion.div>
          )}
          <li className='liCategoria'>Lorem Ipsum</li>
          <li onClick={toggleCategoriasInternas2} className='liCategoria liCategoriaArrow'>
            Lorem Ipsum
            <div className='contenedorArrowCategoria'>
              <FontAwesomeIcon 
                className='iconChevron' 
                icon={categoriasAbiertasInternas2 ? faChevronUp : faChevronDown} 
              />
            </div>
          </li>
          { categoriasAbiertasInternas2 && (
            <motion.div 
              className='contenedorCategoriaAbiertaInterna'
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }} 
            >
              <ul className='categoriaInternaAbierta'>
                <li className='liCategoria'>Lorem Ipsum</li>
                <li className='liCategoria'>Lorem Ipsum</li>
              </ul>
            </motion.div>
          )}
        </motion.ul>
      )}
    </>
  );
}
