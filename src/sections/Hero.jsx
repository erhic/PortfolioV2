import Button from "../Components/Button"
import { hero } from "../assets/images"
import { heroButtons, socialIcons } from "../constants"

const Hero = () => {
  return (
    // full width col but lg will have row occur 100view height justify center for elements inside
    <section className="w-full flex  flex-col xl:flex-row justify-center items-center gap-10 max-continer min-h-screen pt-28">
      <div className="relative flex flex-col xl:w-3/5 justify-center items-start w-full max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">WEB DEVELOPER</p>
        <h1 className="mt-10 font-palanquin text-8xl text-blue-950 max-sm:text-[62px] max-sm:leading-[72px] font-bold">
          <span className="no-wrap">Hello, my name</span>  is <span className="text-coral-red inline-block ">Eric</span>
        </h1>
        <p className="text-lg leading-8 mt-6 mb-7 sm:max-w-sm font-montserrat text-slate-gray"> I'm a Fullstack software developer  </p>
        <div className="flex">
          {
            heroButtons.map((item) => (
              <aside key={item.label}>
                <Button label={item.label} buttonIcon={item.btnIcon} />
              </aside>
            ))


          }

        </div>
        <div className="flex mt-8 gap-4 px-4">
          {
            socialIcons.map((item) => (
              <img key={item.altname} src={item.socialicon} width={25} height={25} alt="video icon" />
            ))
          }
        </div>

      </div>
      <div className="relative flex justify-center ">
        <img src={hero} alt="Hero Image" width={610} height={500} className="object-contain relative z-10" />
      </div>
    </section>
  )
}

export default Hero