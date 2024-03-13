
import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import { Footer } from "./sections"


export default function App() {
  return (
    <main>
      <section><Nav /> </section>
      <Outlet />
      <section className=""><Footer /> </section>
    </main>
  )
}