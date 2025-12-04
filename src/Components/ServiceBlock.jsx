import React from 'react';

// Import images correctly (relative path)
import machineImg from '../assets/machine.png';
import secondBoxImg from '../assets/secondbox.png';
import thirdBoxImg from '../assets/3rdbox.png';
import fourthBoxImg from '../assets/4thbox.png';
import fifthBoxImg from '../assets/5thbox.png';
import sixthBoxImg from '../assets/6thbox.png';

const ServiceBlock = () => {
  return (
    <div className='Service-Block'>
      <div className='services'>

        <div className='first-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Search engine</h3>
              <h3>optimization</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img className="firstthing" src={machineImg} alt="SEO Optimization" />
          </div>
        </div>

        <div className='Second-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Pay-per-click</h3>
              <h3>advertising</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img src={secondBoxImg} alt="PPC Advertising" />
          </div>
        </div>

        <div className='third-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Social Media</h3>
              <h3>Marketing</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img src={thirdBoxImg} alt="Social Media" />
          </div>
        </div>

        <div className='fourth-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Email</h3>
              <h3>Marketing</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img src={fourthBoxImg} alt="Email Marketing" />
          </div>
        </div>

        <div className='fifth-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Content</h3>
              <h3>Creation</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img src={fifthBoxImg} alt="Content Creation" />
          </div>
        </div>

        <div className='sixth-box'>
          <div className='first-engine'>
            <div className='engine'>
              <h3>Analytics and</h3>
              <h3>Tracking</h3>
            </div>
            <div className='learn-more'>
              <p>Learn more</p>
            </div>
          </div>
          <div className='eng-img'>
            <img src={sixthBoxImg} alt="Analytics Tracking" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceBlock;
