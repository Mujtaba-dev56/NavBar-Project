import React from 'react'
import './Style.css' 
import Services from './Services';
 
function Navbar() {

    
  return (
   <>
   
   <div className="main">

    <h2>  Navbar  </h2>   

 <div className='list'> 
 <ul> 
     <li> <a href="/">  Home    </a>     </li>
     <li> <a href="about">  About   </a>     </li>
     <li> <a href="services"> Services </a>     </li>
     <li> <a href="contact"> Contact  </a>     </li>
                       
    </ul>
</div> 
   </div>
   </>
  )
}
export default Navbar;