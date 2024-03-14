import Button from "./Button"

const Contactinfo = ({ view }) => {
  return (

    <div className={`pt-16 ${view}`}>
      <div className="px-10 py-10  max-lg:max-container  ">
        <h2 className="font-montserrat text-lg flex justify-center font-bold text-blue-900 py-5">Get in Touch</h2>
        <form action="" className="flex max-lg:flex-col max-lg:justify-center max-lg:px-3 px-14 py-9 items-start font-montserrat  gap-5 hover:border-blue-900 border justify-between rounded-lg">

          <div className="flex flex-col gap-5 text-slate-gray ">
            <div className="flex ">
              <label className="text-black" htmlFor="">Name: </label>
              <input type="text" placeholder=" Eric Ngugi" className="outline-none mx-2" />
            </div>
            <div className="flex ">
              <label className="text-black" htmlFor="">Phone: </label>
              <input type="text" placeholder="254790688795" className=" outline-none mx-2" />
            </div>

            <div>
              <label className="text-black" htmlFor="">Email: </label>
              <input type="text" placeholder="ericngugi24@gmail.com" className="outline-none mx-3" />
            </div>
            <div>
              <label className="text-black" htmlFor="">Address: </label>
              <input type="text" placeholder="Nairobi ,Kenya" className="outline-none mx-3" />
            </div>
            <div>
              <label className="text-black" htmlFor="">Country: </label>
              <input type="text" placeholder="Kenya" className="outline-none mx-3" />
            </div>

          </div>
          <div className="flex flex-col gap-10 border-l pl-4">
            <div className="flex ">
              <label htmlFor="">Name </label>
              <input type="text" placeholder="" className="border-b hover:border-blue-900 outline-none mx-2" />
            </div>
            <div className="flex ">
              <label htmlFor="">Phone </label>
              <input type="text" placeholder="" className="border-b hover:border-blue-900 file:outline-none mx-2" />
            </div>

            <div>
              <label htmlFor="">Email </label>
              <input type="text" placeholder="" className="border-b hover:border-blue-900 outline-none mx-3" />
            </div>
            <textarea placeholder="Type your message here" name="" id="" cols="30" rows="3" className="outline-blue-900 p-5 border max-lg:w-4/5 hover:border-blue-900"></textarea>
            <button className="max-w-[30px] ">
              <Button label="Submit" buttonIcon="" />
            </button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Contactinfo