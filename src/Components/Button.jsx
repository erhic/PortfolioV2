
const Button = ({ label, buttonIcon }) => {
  let contactMe = 'Contact Me'
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full ${label !== contactMe ? 'bg-white text-coral-red border-coral-red ml-3' : 'bg-coral-red text-white '
      }`}>{label}
      <img src={buttonIcon} alt='Contact icon' className="ml-2  rounded-full w-5 h-5 " />
    </button>
  )
}

export default Button