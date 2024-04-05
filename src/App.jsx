import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import NavData from "./router/router"
import "./App.css"
import Footer from './components/footer/Footer';

function App() {
 
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
