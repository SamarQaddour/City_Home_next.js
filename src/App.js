import Navbar from "./component/navbar/Navbar"
import "./App.css"
import Hero from "./component/hero/Hero"
import About from "./component/about/About"
import Developer from "./component/developer/Developer"
import Subscribe from "./component/subscribe/Subscribe"

import Sammour from "./component/Sammour/Sommour"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Sammour />
    </div>
  )
}

export default App
