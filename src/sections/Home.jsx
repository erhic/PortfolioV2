
import Aboutme from "./Aboutme"
import Contact from "./Contact"
import Hero from "./Hero"
import Myservices from "./Myservices"
import Projects from "./Projects"
import Reviews from "./Reviews"


const Home = () => {


  return (
    <>
      <section className="xl:padding-l px-16 wide:padding-r padding-b"><Hero /> </section>
      <section className="padding"><Aboutme /> </section>
      <section className="padding-x py-10"><Myservices /> </section>
      <section className="padding"><Projects /> </section>

      <section className="padding bg-pale-blue"><Reviews /> </section>
      <section className="padding-x sm:py-32 py-16 w-full"><Contact /></section>
    </>
  )
}

export default Home