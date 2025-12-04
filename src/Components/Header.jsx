import React from 'react';

// Import all images
import illustration from '../assets/illustration.png';
import company1 from '../assets/Company1.png';
import company2 from '../assets/Company2.png';
import company3 from '../assets/Company3.png';
import company4 from '../assets/Company4.png';
import company5 from '../assets/Company5.png';
import company6 from '../assets/Company6.png';

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
            <p>
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </p>
          </div>
          <div className='book'>
            <button className='main-btn'>Book a consultation</button>
          </div>
        </div>
        <div className='header-logo'>
          <img src={illustration} alt="Illustration" className='speaker' />
        </div>
      </div>

    
      <div className='logos'>
        <ul className='logos-list'>
          {[company1, company2, company3, company4, company5, company6].map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Company ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Services Subheading */}
      <div className='subheading'>
        <div className='left-sub'>
          <h1>Services</h1>
        </div>
        <div className='right-sub'>
          <p>At our digital marketing agency, we offer a range of services to</p>
          <p>help businesses grow and succeed online. These services include:</p>
        </div>
      </div>
    </>
  );
};

export default Header;
