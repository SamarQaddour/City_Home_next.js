import Navbar from "./component/navbar/Navbar"
import "./App.css"
import Hero from "./component/hero/Hero"
import About from "./component/about/About"
import Developer from "./component/developer/Developer"
import Subscribe from "./component/subscribe/Subscribe"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
    </div>
  )
}

export default App
