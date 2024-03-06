import { useState } from "react"
import Button from "../Components/Button"
import Personalinfo from "../Components/Personalinfo"
import Qualification from "../Components/Qualification"
import Skills from "../Components/Skills"
import { hero } from "../assets/images"
import { aboutMe } from "../constants"

const Aboutme = () => {
  const [itemLabel, setItemLabel] = useState('Personal Info')
  return (<> <h2 className="flex pb-8 justify-center font-bold text-2xl font-montserrat text-slate-gray">About Me</h2>
    <section className="w-full flex flex-col xl:flex-row justify-center items-center">

      <div className="flex justify-between items-start w-full max-container max-lg:justify-center">
        <div className=" py-10 block max-lg:hidden">
          <img src={hero} alt="Hero image 2" width={610} height={500} className="object-contain relative z-10" />
        </div>
        <div className="xl:w-3/5 ">
          <div className="flex flex-row max-lg:flex-col  rounded-full  justify-center  gap-2">
            {
              aboutMe.map((item) => (
                <a key={item.label} onClick={() => { setItemLabel(item.label) }} >
                  <Button label={item.label} buttonIcon='' />
                </a>
              ))
            }
          </div>

          {
            itemLabel === "Personal Info" ? <Personalinfo /> : itemLabel === "Qualifications" ? <Qualification /> : itemLabel === "Skills" ? <Skills /> : ''
          }



        </div>
      </div>
    </section >
  </>
  )
}

export default Aboutme