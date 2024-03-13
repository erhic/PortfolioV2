
import { livesite } from "../assets/icons"
import { project } from '../constants'


const AllProjects = () => {


  return (

    <>
      <div className="pb-16 pt-16">

        <div className="flex py-16 w-3/5 justify-center max-container gap-2 ">
          {/* {
          devStack.map((itembtn) => (
            <span key={itembtn.stacks}>
              <Button label={itembtn.stacks} buttonIcon="" />
            </span>

          )
          )
        } */}
          <h1 className="font-montserrat text-lg font-semibold text-slate-gray ">  All projects</h1>
        </div>
        <div >


          <div className="flex justify-center gap-10 flex-row max-md:flex-coln flex-wrap w-5/5 max-container max-lg:flex-row max-lg:pt-16 max-md:pl-14">

            {
              project.map((item) => (
                <div key={item.projectName} className="max-w-[230px] min-w-[230px] border  overflow-hidden border-red-200 hover:red-300 hover:border-2 rounded-lg ">
                  <div className="px-7 pt-17 pb-5 min-h-[210px] max-h-[210px] bg-[url('assets/images/background.jpg')]">
                    <p className="py-1 px-4 my-3 text-white rounded-full text-base bg-coral-red inline-block"> {item.language}</p>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <a href="" className="hidden">
                        <span className="absolute p-16 mx-5 "><img src={livesite} alt="Livesite link" className="" /></span>

                      </a>
                      <img src={item.image} alt="Project Image" className="   " />
                    </div>
                  </div>
                  <h2 className="leading-8 text-coral-red px-5 pt-3"> {item.projectName}</h2>
                  <p className="px-5 pb-4 leading-6 font-palanquin text-lg text-slate-gray">
                    {item.description}
                  </p>
                </div>))}
          </div >
        </div >
      </div>
    </>
  )
}



export default AllProjects