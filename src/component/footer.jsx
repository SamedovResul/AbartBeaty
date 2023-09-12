import React from 'react'
import img from './img/abart.png'


const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-12">
            <img src={img} alt="" />
            <p>© {year} Abart Beaty.  All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
{/* <p>© {year} Metatesk.  All Rights Reserved</p> */}