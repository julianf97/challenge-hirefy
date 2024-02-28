import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiCategories from '../LiCategories/LiCategories';
import { 
  faHouse,
  faQuestion,
  faUsers,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { 
  forTalentsText,
  homeText,
  howItWorksText,
  marketPlaceText
} from '../../../contants/contants';


export default function ListaNav() {

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
    <div className="contenedorLista">
      <ul className="lista">
        <li onClick={() => setCategoriasAbiertas(false)}> 
          <div className="liLogo">
            <FontAwesomeIcon className='iconHouse' icon={faHouse} />
          </div>
          {homeText}
        </li>
        <li onClick={() => setCategoriasAbiertas(false)}> 
          <div className="liLogo">
            <FontAwesomeIcon className='iconQuestion' icon={faQuestion} />
          </div>
          {howItWorksText}
        </li>
        <li onClick={() => setCategoriasAbiertas(false)}> 
          <div className="liLogo">
            <FontAwesomeIcon className='iconUsers' icon={faUsers} />
          </div>
          {marketPlaceText}
        </li>
        <li onClick={() => setCategoriasAbiertas(false)}> 
          <div className="liLogo">
            <FontAwesomeIcon className='iconFile' icon={faFile} />
          </div>
          {forTalentsText}
        </li>
        <LiCategories
          categoriasAbiertas={categoriasAbiertas}
          setCategoriasAbiertas={setCategoriasAbiertas}
          categoriasAbiertasInternas={categoriasAbiertasInternas}
          setCategoriasAbiertasInternas={setCategoriasAbiertasInternas}
          categoriasAbiertasInternas2={categoriasAbiertasInternas2}
          setCategoriasAbiertasInternas2={setCategoriasAbiertasInternas2}
          toggleCategorias={toggleCategorias}
          toggleCategoriasInternas={toggleCategoriasInternas}
          toggleCategoriasInternas2={toggleCategoriasInternas2}
        />
      </ul>
    </div>
  );
}
