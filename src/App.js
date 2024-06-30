import './App.css';
import Hero from './components/Hero';
import Motto from './components/Motto';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="App max-w-[1500px] mx-auto">
        <Hero/>
        <Motto/>
        <About/>
        <Project/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
