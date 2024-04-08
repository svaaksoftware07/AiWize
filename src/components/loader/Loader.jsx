import React from 'react'
import "./style.css"
function Loader() {
  return (
    <>
      <div className="loader-main-header">
        <div className="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      </div>
    </>
  )
}

export default Loader