import { motion } from 'framer-motion';
import "./openNavbar.css";
import ListaNav from "./ListaNav/ListaNav";
import Terms from './Terms/Terms';

export default function OpenNavbar() {
  return (
    <motion.div
      className="contenedorPrincipalOpenNavbar"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contenedorInternoOpenNavbar">
        <ListaNav />
      </div>
      <Terms/>
    </motion.div>
  );
}
