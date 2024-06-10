import './App.css';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App max-w-[1300px] mx-auto">
        <Hero/>
        <About/>

        <div className='h-[500px]'/>
    </div>
  );
}

export default App;
