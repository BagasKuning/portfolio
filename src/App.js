import "./App.css";
import Footer from "./components/Footer";
import Hero from "./pages/Home/Hero";
import Motto from "./pages/Home/Motto";
import About from "./pages/Home/About";
import Project from "./pages/Home/Project";
import Experience from "./pages/Home/Experience";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project />
      <About />
      <Experience />
      <Motto />
      <Footer />
    </div>
  );
}

export default App;
