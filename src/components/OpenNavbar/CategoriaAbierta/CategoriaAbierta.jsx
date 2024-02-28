/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Categoria from '../Categoria/Categoria';
import CategoriaInterna from '../CategoriaInterna/CategoriaInterna';
import { loremIpsumText } from '../../../contants/contants';

export default function CategoriaAbierta({
  categoriasAbiertas,
  categoriasAbiertasInternas,
  categoriasAbiertasInternas2,
  toggleCategoriasInternas,
  toggleCategoriasInternas2
}) {
  return (
    <>
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
