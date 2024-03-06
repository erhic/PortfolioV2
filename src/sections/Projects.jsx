import Button from "../Components/Button"
import { livesite } from "../assets/icons"
import { project } from "../constants"

const Projects = () => {
  return (
    <>

      <div className="flex flex-row max-lg:flex-col max-lg:justify-center">
        <div className="px-7">
          <h2 className="font-montserrat leading-8  text-lg  font-bold flex justify-start gap-5"> <span className="px-3 rounded-full bg-coral-red text-[1px] "></span>Latest Project</h2>
          <p className="leading-8 font-palanquin text-lg text-slate-gray py-4 w-80">Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing  </p>
          <div className="absolute "><Button label="All Project" buttonIcon='' />
          </div>
        </div>

        <div className="flex justify-center gap-10 flex-row max-md:flex-col max-lg:flex-row max-lg:pt-16 max-md:pl-16">

          {project.map((item) => (
            <div key={item.projectName} className="max-w-[230px] min-w-[230px] border  overflow-hidden border-red-200 hover:red-300 hover:border-2 rounded-lg ">
              <div className="px-7 pt-17 pb-5 bg-[url('assets/images/background.jpg')]">
                <p className="py-1 px-4 my-3 text-white rounded-full text-base bg-coral-red inline-block"> {item.language}</p>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <a href="" className="hidden">
                    <span className="absolute p-16 mx-5 "><img src={livesite} alt="Livesite link" className="" /></span>

                  </a>
                  <img src={item.image} alt="Project Image" className="  " />
                </div>
              </div>
              <h2 className="leading-8 text-coral-red px-5 pt-3"> {item.projectName}</h2>
              <p className="px-5 pb-4 leading-6 font-palanquin text-lg text-slate-gray">
                {item.description}
              </p>
            </div>))}
        </div >
      </div >
    </>
  )
}

export default Projects