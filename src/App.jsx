import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import NavData from "./router/router"
import "./App.css"

function App() {
  console.log(NavData);
  return (
    <>
      <Navbar />
      <Routes>
        {NavData.map((item, index) =>
          <Route key={index} path={item.path} element=<div className='hero-section-header'>{item.element}</div>/>
        )}
      </Routes>
    </>
  )
}

export default App
