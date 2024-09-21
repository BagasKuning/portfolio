import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="App shadow-lg  max-w-[1600px] mx-auto">
      <Navbar/>

      <Hero />
      <About />
      <Motto />
      <Project />

      <Footer />
    </div>
  );
}

export default App;
