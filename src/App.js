import "./App.css";
import Footer from "./components/Footer";
import Hero from "./pages/Home/Hero";
import Motto from "./pages/Home/Motto";
import About from "./pages/Home/About";
import Project from "./pages/Home/Project";

function App() {
  return (
    <div className="App shadow-lg  max-w-[1600px] mx-auto">

      {/* Home page */}
      <Hero />
      <About />
      <Motto />
      <Project />

      <Footer />
    </div>
  );
}

export default App;
