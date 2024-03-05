import Button from "../Components/Button"
import { livesite } from "../assets/icons"
import { mbankapp, stockapp } from "../assets/images"

const Projects = () => {
  return (
    <>

      <div className="flex">
        <div className="px-11">
          <h2 className="font-montserrat leading-8  text-lg  font-bold flex justify-start gap-5"> <span className="px-4 rounded-full bg-coral-red text-[1px] "></span>Latest Project</h2>
          <p className="leading-8 font-palanquin text-lg text-slate-gray py-4 w-80">Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing  </p>
          <div className="absolute "><Button label="All Project" buttonIcon='' />
          </div>
        </div>

        <div className="flex justify-center gap-10">


          <div className="max-w-[350px] border border-red-200 hover:red-300 hover:border-2 rounded-lg ">
            <div className="px-12 pt-17 pb-7 bg-[url('assets/images/background.jpg')]">
              <p className="py-2 px-4 my-4 text-white rounded-full text-base bg-coral-red inline-block"> Angular</p>
              <div className="rounded-lg bg-gray-500 overflow-hidden shadow-lg">
                <a href="" className="hover:visible">
                  <span className="absolute p-16 mx-16"><img src={livesite} alt="Livesite link" className="" /></span>

                </a>
                <img src={stockapp} alt="Project Image" className="  " />
              </div>
            </div>
            <h2 className="leading-8 text-coral-red px-5 pt-4"> Job Website</h2>
            <p className="px-5 pb-5 leading-6 font-palanquin text-lg text-slate-gray">
              Lorem ipsum dolor, sit amet consectetur ae aspernatur ut.
            </p>
          </div>
          <div className="max-w-[350px] border border-red-200 hover:red-300 hover:border-2 rounded-lg ">
            <div className="px-12 pt-17 pb-7 bg-[url('assets/images/background.jpg')]">
              <p className="py-2 px-4 my-4 text-white rounded-full text-base bg-coral-red inline-block"> React Native</p>
              <div className="rounded-lg bg-transparent overflow-hidden shadow-lg ">
                <a href="" className="hover:visible">
                  <span className="absolute p-16 mx-16"><img src={livesite} alt="Livesite link" className="" /></span>

                </a>
                <div className="rotate-[360deg]"><img src={mbankapp} alt="Project Image" className=" object-contain h-40 w-96" /></div>

              </div>
            </div>
            <h2 className="leading-8 text-coral-red px-5 pt-4"> Banking App</h2>
            <p className="px-5 pb-5 leading-6 font-palanquin text-lg text-slate-gray">
              Lorem ipsum dolor, sit amet consectetur ae aspernatur ut.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects