import { hero } from "../assets/images"
import { reviews } from "../constants"

const Reviews = () => {
  return (
    <>
      <h2 className="flex justify-center font-montserrat text-2xl font-bold text-slate-gray leading-8 pb-16">Reviews</h2>

      <div className="flex justify-center flex-row gap-5">
        {
          reviews.map((item) => (
            <div key={item.person} className="border border-red-200 rounded-lg max-w-[400px]">
              <div className="flex flex-row justify-center gap-4 items-center pt-6">
                <img src={hero} width={90} alt="Profile Image" className="overflow-hidden rounded-full" />
                <div>
                  <p className="font-semibold text-xl text-slate-gray">{item.person}</p>
                  <p className="text-base leading-8">{item.work}</p>
                </div>

              </div>
              <div>
                <p className="px-8 pt-4 pb-9 leading-normal font-palanquin text-slate-gray text-lg">{item.comment}</p>
              </div>

            </div>
          ))
        }
      </div>
    </>
  )
}

export default Reviews