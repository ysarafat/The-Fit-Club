import './App.css';
import Customer from './components/Customer/Customer';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Customer/>
         <Footer/>
    </div>
  );
}

export default App;
