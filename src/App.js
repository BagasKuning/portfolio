import './App.css';
import Hero from './components/Hero';
import Motto from './components/Motto';
import About from './components/About';

function App() {
  return (
    <div className="App max-w-[1500px] mx-auto">
        <Hero/>
        <Motto/>
        <About/>

        <div className='h-[500px]'/>
    </div>
  );
}

export default App;
