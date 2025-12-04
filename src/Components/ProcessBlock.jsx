import React from 'react';

// Import all images
import faceImg from '/src/assets/face.png';

const ProcessBlock = () => {
  return (
    <>
      <div className='helloblock'>
        <div className='processblock'>
          
          {/* Step Blocks */}
          <div className='firstblock'>
            <div className='hello'>
              <h3>01 Consultation</h3>
              <div className='consultation'>-</div>
            </div>
            <p>
              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
            </p>
          </div>

          <div className='secondblock'>
            <div className='hello2'>
              <h3>02 Research and Strategy Development</h3>
              <div className='consultation'>+</div>
            </div>
          </div>

          <div className='thirdblock'>
            <div className='hello3'>
              <h3>03 Implementation</h3>
              <div className='consultation'>+</div>
            </div>
          </div>

          <div className='fourthblock'>
            <div className='hello4'>
              <h3>04 Monitoring and Optimization</h3>
              <div className='consultation'>+</div>
            </div>
          </div>

          <div className='fifthblock'>
            <div className='hello5'>
              <h3>05 Reporting and Communication</h3>
              <div className='consultation'>+</div>
            </div>
          </div>

          <div className='sixthblock'>
            <div className='hello6'>
              <h3>06 Continual Improvement</h3>
              <div className='consultation'>+</div>
            </div>
          </div>

          {/* Team Section */}
          <div className='Team'>
            <h3>Team</h3>
            <div className='team-skill'>
              <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
          </div>

          {/* Team Cards */}
          <div className='Cards'>
            {[
              { name: 'John Smith', role: 'CEO and Founder', exp: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' },
              { name: 'Jane Doe', role: 'Director of Operations', exp: '7+ years of experience in project management and team leadership. Strong organizational and communication skills' },
              { name: 'Michael Brown', role: 'Senior SEO Specialist', exp: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' },
              { name: 'Emily Johnson', role: 'PPC Manager', exp: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' },
              { name: 'Brian Williams', role: 'Social Media Specialist', exp: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' },
              { name: 'Sarah Kim', role: 'Content Creator', exp: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries' },
            ].map((member, index) => (
              <div key={index} className={`cards card-${index + 1}`}>
                <div className='cardsname'>
                  <img src={faceImg} alt={member.name} />
                  <div className='nameinfo'>
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                  </div>
                </div>
                <p>{member.exp}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* See All Team Button */}
      <div className='team'>
        <button className='bts'>See all team</button>
      </div>
    </>
  );
}

export default ProcessBlock;
