import { Link } from "react-router-dom"
import { CV } from "../assets/Documents"





const Button = ({ label, buttonIcon }) => {
  let contactMe = 'Contact Me'

  return (<>
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  w-full min-w-[150px] rounded-full 
      ${label !== contactMe ?
          'bg-white text-coral-red border hover:border-coral-red hover:bg-coral-red hover:text-white ml-3' : 'bg-coral-red text-white '
        }`
      }>
      {label == "Download CV" ? (<Link
        to={CV}
        download="Eric CV"
        target="_blank"
        rel="noreferrer"
      >Download CV</Link>) : label

      }
      <img src={buttonIcon} alt='Contact icon' className={`ml-2  rounded-full w-5 h-5 ${buttonIcon !== '' ? buttonIcon : 'hidden'}`} />
    </button>


  </>
  )
}

export default Button