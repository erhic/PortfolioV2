import Nav from "./Components/Nav"
import { Hero, Aboutme, Myservices, Projects, Reviews, Footer } from "./sections"

export default function App() {
  return (
    <main>
      <section><Nav /> </section>
      <section className="xl:padding-l wide:padding-r padding-b"><Hero /> </section>
      <section className="padding"><Aboutme /> </section>
      <section className="padding-x py-10"><Myservices /> </section>
      <section className="padding"><Projects /> </section>
      <section className="padding bg-pale-blue"><Reviews /> </section>
      <section className="padding-x sm:py-32 py-16 w-full">subscribe/form contact us</section>
      <section className="padding"><Footer /> </section>
    </main>
  )
}