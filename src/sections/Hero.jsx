import Button from "../Components/Button"
import { contact, download } from "../assets/icons"
import { hero } from "../assets/images"

const Hero = () => {
  return (
    // full width col but lg will have row occur 100view height justify center for elements inside
    <section className="w-full flex  flex-col xl:flex-row justify-center items-center gap-10 max-continer min-h-screen pt-28">
      <div className="relative flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-red">WEB DEVELOPER</p>
        <h1 className="mt-10 font-palanquin text-8xl text-blue-950 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="no-wrap">Hello, my name</span>  is <span className="text-coral-red inline-block ">Eric</span>
        </h1>
        <p className="text-lg leading-8 mt-6 mb-10 sm:max-w-sm font-montserrat"> I'm a Fullstack software developer  </p>
        <div className="flex">
          <Button label='Contact Me' buttonIcon={contact} />
          <Button label='Download CV' buttonIcon={download} />
        </div>

      </div>
      <div className="relative flex justify-center ">
        <img src={hero} alt="Hero Image" width={610} height={500} className="object-contain relative z-10" />
      </div>
    </section>
  )
}

export default Hero