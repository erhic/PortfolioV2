
import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import { Footer } from "./sections"
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main>
      <section><Nav /> </section>
      <Outlet />
      <section className=""><Footer /> </section>
    </main>
  )
}