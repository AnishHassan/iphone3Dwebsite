import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import HowItWorks from "./Components/HowItWorks"
import Model from "./Components/Model"
import Navbar from "./Components/Navbar"
import * as Sentry from '@sentry/react'

const App = () => {

  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
