import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import Model from "./Components/Model"
import Navbar from "./Components/Navbar"

const App = () => {

  return (
    <>
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
   </main>
    </>
  )
}

export default App
