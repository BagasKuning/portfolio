import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="App shadow-lg  max-w-[1600px] mx-auto">

      <Hero />
      <About />
      <Motto />
      <Project />

      <Footer />
    </div>
  );
}

export default App;
