import Navbar from './components/navbar/navbar';
import React,{useEffect} from 'react'
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import AOS from 'aos';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <Navbar />
      <Landing/>
      <Footer/>
      {
        /*
   <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing/>} />
            <Route exact path='/about' element={<Landing/>} />
            <Route exact path='/service' element={<Landing/>} />
            <Route exact path='/contact' element={<Landing/>} />
          </Routes>
        </Router>
        */
      }


    </>
  );
}

export default App;
