import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import Affiliate from './components/affiliate/Affiliate.jsx'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact us' element={<ContactUs/>}/>
        <Route path='/affiliate' element={<Affiliate/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
