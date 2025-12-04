import React from 'react';

// Import all images
import starImg from '../assets/star.png';
import linkedinImg from '../assets/linkd.png';
import facebookImg from '../assets/facebookmee.png';
import twitterImg from '../assets/twtiter.png';

const FooterBlock = () => {
  return (
    <div className='footer-main'>
      <div className='footer-container'>
        
        {/* Footer Top */}
        <div className='Footer'>
          <img src={starImg} alt="Star Logo" />
          <h3>Positivus</h3>

          <nav className='nav'>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </nav>

          <div className='Profilethree'>
            <div className='profile'>
              <img src={linkedinImg} alt="LinkedIn" />
              <img src={facebookImg} alt="Facebook" />
              <img src={twitterImg} alt="Twitter" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='footer-contactus'>
          <div className='contackus'>
            <h3>Contact us:</h3>
            <p>Phone: 555-567-8901</p>
            <p>Email: info@positivus.com</p>
            <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>

          <div className='emialborder'>
            <div className='emial'>
              <input className='mail' type="email" placeholder='Email' />
              <button className='subscribe'>Subscribe to news</button>
            </div>
          </div>
        </div>

        {/* Footer Line */}
        <div className='footer-line'></div>

        {/* Footer End */}
        <div className='fotter-end'>
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </div>
  );
};

export default FooterBlock;
