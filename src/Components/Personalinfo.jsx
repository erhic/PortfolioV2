import { personalInfo } from "../constants"

const Personalinfo = () => {
  return (
    <>


      <h2></h2>
      <p className="item-center px-10 py-10 leading-8 font-montserrat text-base text-slate-gray ">I specialize  in crafting intuative websites with cutting edge of technology , delivery dynamic and engaging user experience</p>
      <div className="flex flex-row max-lg:flex-col justify-between px-16 leading-8 pt-13 font-montserrat text-base">
        <div className="">
          {
            personalInfo.filter((item, index) => index <= 2).map((itm) => (
              <div key={itm.icon} className="flex gap-5 item center leading-9 text-slate-gray">
                <img src={itm.icon} /> <span>{itm.label}</span>
              </div>
            ))
          }
        </div>
        <div>
          {
            personalInfo.filter((item, index) => index > 2).map((itm) => (
              <div key={itm.icon} className=" flex gap-5 leading-9 text-slate-gray">
                <img src={itm.icon} /> <span>{itm.label}</span>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Personalinfo