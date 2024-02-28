import { 
  termsText, 
  privacyText, 
  securityText, 
  versionText 
} from "../../../contants/contants"

export default function Terms() {
  return (
    <div className='contenedorTerms'>
        <div className='contenedorTextBlue'>
            <span className="textBlue">{termsText}</span>
            <span className="textBlue">{privacyText}</span>
            <span className="textBlue">{securityText}</span>
            <span className="textBlue">{versionText}</span>
        </div>
        <div className='contenedorYearHireFy'>
          <span className="finalText"> © 2023, Hirefy, LLC  </span>
        </div>
    </div>
  )
}
