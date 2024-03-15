import React from 'react'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

import { Ripple, initMDB } from "mdb-ui-kit";
initMDB({ Ripple });
function Footer() {
  return (
    <div className='footer'>
      <footer className="bg-body-transparent text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="https://www.facebook.com/profile.php?id=100028844448220" role="button"><i className="fab fa-facebook-f" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/in/ahmed-kamal-b51621277/" role="button"><i className="fab fa-linkedin-in" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="https://github.com/KEMO414" role="button"><i className="fab fa-github" /></a>
    </section>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2024 Copyright : 
    <a className="text-body text-white-50 " href="https://www.linkedin.com/in/ahmed-kamal-b51621277/"> Ahmed Kamal</a>
  </div>
</footer>

    </div>
  )
}

export default Footer
