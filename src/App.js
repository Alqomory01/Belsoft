import './App.css';
import Myheader from './components/Myheader';
import Myhero from './components/Myhero';
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
// import Home from './components/Home'
import Services from './components/Services';


function App() {
  return (
    <div>
     <Myheader/>
     <Myhero/>

     <Routes>
    <Route path='/' element={App}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
     </Routes>

     
    
    </div>
  );
}

export default App;
