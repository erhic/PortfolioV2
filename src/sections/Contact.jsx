import { useState } from "react"
import Button from "../Components/Button"
import Contactinfo from "../Components/Contactinfo"


const Contact = () => {
  const [toogle, setToogle] = useState('hidden')
  return (<>
    <div className="flex flex-row justify-center pb-16 pt-6">
      <p className=" flex justify-center py-10 font-palanquin font-bold text-2xl">Prepared to turn your ideas into reality? I amm here to help</p>
      <div className="absolute mt-16 pt-16 ">
        <button onClick={() => (setToogle(''))}>
          <Button label="Contact Me" buttonIcon='' />
        </button>

      </div>

    </div >
    <Contactinfo view={toogle} />
  </>
  )
}

export default Contact