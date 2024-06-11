import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App max-w-[1300px] mx-auto">
        <Hero/>
        <About/>
        <Skill/>

        <div className='h-[500px]'/>
    </div>
  );
}

export default App;
