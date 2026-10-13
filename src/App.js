import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <About />
      <Services />
      <Tours />
      <Footer />
      <script src="./js/app.js"></script>
    </>
  )
}

export default App
