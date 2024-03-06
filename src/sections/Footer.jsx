import { socialIcons } from "../constants"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex flex-row justify-center bg-blue-950 ">
      <div className="flex flex-col  p-16">
        <div className=" flex flex-row justify-center pb-4 gap-3">
          {
            socialIcons.map((item) => (
              <img key={item.altname} src={item.socialicon} width={25} height={25} alt="video icon" />
            ))
          }
        </div>
        <div className="flex flex-row">
          <p className="font-pallidium leading-8  text-lg text-white">Copyright {currentYear} |  Eric Ngugi | All rights reserved . </p>
        </div>
      </div>
    </div>
  )
}

export default Footer