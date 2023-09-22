
import './App.css';
import Home from './components/Home'
import About from'./components/About'
import Contact from './components/Contact'
import Service from './components/Service';
import Marketing from './pages/Marketing';
import Development from './pages/Development';
import { Route, Routes } from "react-router-dom";
import Design from './pages/Design';
import Seo from './pages/Seo';
import Smo from './pages/Smo';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import Navbar from './components/Navbar';

function   App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Service}></Route>
        <Route path="/marketing" component={Marketing}></Route>
        <Route path="/development" component={Development}></Route>
        <Route path="/design" component={Design}></Route>
        <Route path="/seo" component={Seo}></Route>
        <Route path="/smo" component={Smo}></Route>
        <Route path="/mobileappdevelopment" component={MobileAppDevelopment}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  </>
  );
}

export const NotFound = () => {
  return <div><h1> 404 page not found </h1> </div>
}
export default App;
