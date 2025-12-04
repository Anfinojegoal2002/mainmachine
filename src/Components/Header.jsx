import React from 'react'

const Header = () => {
  return (
    <>
    <div className='main-content'>
      <div className='frame'>
        <div className='Content'>
    <h3>Navigating the</h3>
    <h3>digital landscape</h3>
    <h3>for success</h3>
        </div>
        <div className='para'>

   <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
      </div>
      <div className='book'>
        <button className='main-btn'>Book a consultation</button>
      </div>
        </div>
        <div className='header-logo'>
             <img src="src/assets/illustration.png" alt="stars"  className='speaker'/> 
        </div>
      
      
    </div>
   <div className='logos'>
    <ul className='logos-list'>
        <li><img src="src/assets/Company1.png" alt="frfr" /></li>
        <li><img src="src/assets/Company2.png" alt="frfr" /></li>
        <li><img src="src/assets/Company3.png" alt="frfr" /></li>
        <li><img src="src/assets/Company4.png" alt="frfr" /></li>
        <li><img src="src/assets/Company5.png" alt="frfr" /></li>
        <li><img src="src/assets/Company6.png" alt="frfr" /></li>
    </ul>
   </div>

<div className='subheading'>
     <div className='left-sub'>
        <h1>Services</h1>
     </div>
      <div className='right-sub'>
         <p>At our digital marketing agency, we offer a range of services to </p>
         <p> help businesses grow and succeed online. These services include:</p>
      </div>
</div>
    

    
  </>
  )
}

export default Header
