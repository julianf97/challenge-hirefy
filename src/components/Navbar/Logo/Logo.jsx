import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { hireFyText } from '../../../contants/contants';

export default function Logo() {
  return (
    <div className="contenedorLogo">
      <div className="contenedorImg">
        <div className="imgLogo">
          <FontAwesomeIcon className='iconMaletin' icon={faBriefcase}></FontAwesomeIcon>
        </div>
      </div>
      <div className="contenedorLetrasLogo">
        <span className="letrasLogo">{hireFyText}</span>
      </div>
    </div>
  );
}