import { services } from "../constants"

const Myservices = () => {
  return (<>
    <h2 className="flex justify-center pb-12 font-montserrat leading-8 text-2xl font-bold text-slate-gray">My Services</h2>

    <div className="flex flex-row max-lg:flex-col w-full max-container gap-8 px-5">
      {
        services.map((item) => (
          <div key={item.icon} className="border hover:border-coral-red rounded-lg">

            <div className="flex justify-center items-center pt-3">
              <img src={item.icon} alt="" />
            </div>

            <h2 className="flex justify-center font-montserrat leading-8 pt-3 font-semibold text-lg">{item.title}</h2>
            <p className="flex justify-center font-palanquin text-lg px-4 pt-4 pb-7 text-slate-gray">{item.description}</p>
          </div>
        ))
      }
    </div>
  </>
  )
}

export default Myservices