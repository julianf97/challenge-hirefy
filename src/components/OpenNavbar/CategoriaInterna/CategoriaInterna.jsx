import { motion } from 'framer-motion';
import { loremIpsumText } from '../../../contants/contants';

export default function CategoriaInterna() {
  return (
    <motion.div
      className='contenedorCategoriaAbiertaInterna'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className='categoriaInternaAbierta'>
        <li className='liCategoria'>{loremIpsumText}</li>
        <li className='liCategoria'>{loremIpsumText}</li>
      </ul>
    </motion.div>
  );
}