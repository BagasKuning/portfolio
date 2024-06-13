import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App max-w-[1500px] mx-auto">
        <Hero/>
        <About/>
        <Skill/>
        <Tech/>

        <div className='h-[500px]'/>
    </div>
  );
}

export default App;
