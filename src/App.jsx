import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
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
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
