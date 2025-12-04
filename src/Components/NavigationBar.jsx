import React from 'react'





const NavigationBar = () => {
  return (

  
      <div className="navbar-content">
        
        <div className="navbar-brand">
     <div className='star'>
            <img src="src/assets/vector.png" alt="star" /> 
            </div>
            
             Positivus
        
        
        </div>
         <ul class="nav-menu">
      <li class="nav-item"><a href="#">About us</a></li>
      <li class="nav-item"><a href="#">Services</a></li>
      <li class="nav-item"><a href="#">Use Cases</a></li>
      <li class="nav-item"><a href="#">Pricing</a></li>
      <li class="nav-item"><a href="#">Blog</a></li>
     
    </ul>

     
        <div className="navbar-cta-wrapper">
          <button 
            onClick={() => console.log('CTA clicked')}
            className="navbar-cta-button"
          >
            Request a quote
          </button>
        </div>
        
      </div>

    
    
  );
};



export default NavigationBar;

