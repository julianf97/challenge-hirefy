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

  return (
    <div className="contenedorLista">
      <ul className="lista">
        <li>
          <div className="liLogo">
            <FontAwesomeIcon className='iconHouse' icon={faHouse} />
          </div>
          {homeText}
        </li>
        <li>
          <div className="liLogo">
            <FontAwesomeIcon className='iconQuestion' icon={faQuestion} />
          </div>
          {howItWorksText}
        </li>
        <li>
          <div className="liLogo">
            <FontAwesomeIcon className='iconUsers' icon={faUsers} />
          </div>
          {marketPlaceText}
        </li>
        <li>
          <div className="liLogo">
            <FontAwesomeIcon className='iconFile' icon={faFile} />
          </div>
          {forTalentsText}
        </li>
        <LiCategories/>
      </ul>
    </div>
  );
}
