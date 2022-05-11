import Navbar from '.././src/components/navbar/Navbar'
import './App.css';
import Hero from '.././src/components/hero/Hero'
import Main from '.././src/components/main/Main'
import About from './components/about/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
