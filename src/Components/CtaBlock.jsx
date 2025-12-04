import React from 'react';

// Correct image imports
import frameImg from '../assets/frame.png';
import arrowImg from '../assets/Arrow 1.png';

const CtaBlock = () => {
  return (
    <div>
      {/* CTA Section */}
      <div className='cta-contact'>
        <div className='cta-block'>
          <div className='cta-helloblock'>
            <h1>Let’s make things happen</h1>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className='btn-block'>Get your free proposal</button>
          </div>
          <div className='frame-img'>
            <img className='frame-img2' src={frameImg} alt="CTA Illustration" />
          </div>
        </div>
      </div>

      {/* Case Study Title */}
      <div className='case'>
        <h1>Case Studies</h1>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Case Study Boxes */}
      <div className='boxs'>
        <div className='firstbox'>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <h4>
            Learn more <img src={arrowImg} alt="arrow" />
          </h4>
        </div>

        <div className='firstline'></div>

        <div className='secondbox'>
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <h4>
            Learn more <img src={arrowImg} alt="arrow" />
          </h4>
        </div>

        <div className='thirdbox'>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <h4>
            Learn more <img src={arrowImg} alt="arrow" />
          </h4>
        </div>
      </div>

      {/* Process Title */}
      <div className='work'>
        <h3>Our Working Process</h3>
        <p>
          Step-by-Step Guide to Achieving <br />Your Business Goals
        </p>
      </div>
    </div>
  );
};

export default CtaBlock;
