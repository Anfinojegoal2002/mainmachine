import React from 'react'


const FooterBlock = () => {
    return (
        <div className='footer-main'>
            <div className='footer-container'>
                <div className='Footer'>
                    <img src="src/assets/star.png" alt="" />
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
                            <img src="src/assets/linkd.png" alt="gtgt" />
                            <img src="src/assets/facebookmee.png" alt="dede" />
                            <img src="src/assets/twtiter.png" alt="yh" />

                        </div>
                    </div>

                </div>
                <div className='footer-contactus'>
                    <div className='contackus'>
                        <h3>Contact us:</h3>
                        <p>Phone: 555-567-8901</p>
                        <p>Email: info@positivus.com</p>
                  
                        <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                    </div>
                     <div className='emialborder'>
                    <div className='emial'>

                        <input className='mail' type="emial" placeholder='emial' />
                        <button className='subscribe'>subscribe to news</button>
                    </div>
                    </div>
                </div>
                <div className='footer-line'>

                </div>
                <div className='fotter-end'>
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}

export default FooterBlock
