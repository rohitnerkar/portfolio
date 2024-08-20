import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
   <div className="App">

    <Navbar />

    <div className='App__main-page-content'>
      <Routes>
       <Route index path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/resume' element={<Resume />} />
       <Route path='/skills' element={<Skills />} />
       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>

    <Footer />
    
   </div>
  );
}

export default App;
