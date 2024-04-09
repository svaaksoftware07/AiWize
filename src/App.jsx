import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import NavData from "./router/router"
import "./App.css"
import Footer from './components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        {NavData.map((item, index) =>
          <Route key={index} path={item.path} element={item.element}/>
        )}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
