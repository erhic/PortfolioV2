import { briefcase, graduate } from "../assets/icons"
import { qualifications } from "../constants"

const Qualification = () => {
  return (
    <div className="flex flex-row justify-center gap-16  w-full py-10 max-lg:flex-col">
      <div className="flex flex-col justify-center  ">
        <h2 className="flex justify-center text-coral-red text-lg leading-8 items-center font-montserrat">
          <img src={briefcase} alt="Experience Icon" className="px-4" />Experience
        </h2>
        {qualifications.filter((item, index) => index <= 1).map((item) => (
          <ul key={item.institution} className="border-l ">
            <span className="rounded-full p-1 text-[3px]  my-14 absolute bg-coral-red mr-9"></span>
            <li className="leading-8 font-montserrat text-slate-gray py-4 px-10">
              <span className="block ">{item.institution}</span>
              <span className="block ">{item.title}</span>
              <span className="block ">{item.period}</span>
            </li>
          </ul>
        ))}
      </div>
      <div className="  ">

        <h2 className="  text-coral-red justify-start px-7 leading-8 font-montserrat flex gap-3">
          <img src={graduate} alt="Education Icon" className="" /> Education</h2>
        {qualifications.filter((itms, indx) => indx > 1).map((itm) => (
          <ul key={itm.title} className="border-l ">
            <span className="rounded-full p-1 text-[3px]  my-14 absolute bg-coral-red mr-9"></span>
            <li className="leading-8 font-montserrat text-slate-gray py-4 px-10">
              <span className="block ">{itm.institution}</span>
              <span className="block ">{itm.title}</span>
              <span className="block ">{itm.period}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Qualification