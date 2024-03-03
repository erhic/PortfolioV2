import Nav from "./Components/Nav"
import { Hero, Aboutme, Myservices, Projects, Reviews, Footer } from "./sections"

export default function App() {
  return (
    <main>
      <section><Nav /> </section>
      <section><Hero /> </section>
      <section><Aboutme /> </section>
      <section><Myservices /> </section>
      <section><Projects /> </section>
      <section><Reviews /> </section>
      <section><Footer /> </section>
    </main>
  )
}