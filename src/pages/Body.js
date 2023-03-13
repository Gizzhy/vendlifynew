import "../pages/body.css"
import {Typewriter} from 'react-simple-typewriter'
import  mobile1 from "./public/images/mobile1.png"
import pin from "./public/images/pin.png"
import  offers from "./public/data/offers.js"
import Slider from "./Slider"

const Body = () => {
  return (
    <>
    <div className="body">
            <h1 className="h-1">
            VENDLIFY {' '}<br></br>
            <span>
            <Typewriter
            words={['EXTEND YOUR LIMITS', 'BRIDGING THE GAP']}
            loop={10}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1><br></br>
      <div class="flex social-btns">
       <a class="app-btn blu flex vert" href="#">
        <i class="fab fa-apple"></i>
        <p><span class="big-txt">Download on App Store</span></p>
       </a>
      
      <a class="app-btn blu flex vert" href="#">
      <i class="fab fa-google-play"></i>
      <p class="googl"><span class="big-txt">Download on Google Play</span></p>
      </a>
</div>

</div>

<section id="partner" data-aos="slide-up">
                <div className="container section1">
                    <div className="row">
                        <div className="col-md-7 para1">
                            <h3 className="mobile1-header">Become a Partner</h3>
                            <br />
                            <p className="mobile1-header2">Are you looking to multiply your source of income? With just 5 steps, begin your journey to financial fulfillment.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="mobile1-img" src={mobile1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="slidingg">
                <Slider/>
                </div>
            </section>


            <section className="how1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="howw">How it Works</p>
                    </div>
                </div>
            </div>
                <div className="container how2">
                    <div className="row">
                        <div className="col-md-4">
                        <img className="pin" src={pin} alt="" />
                        <h3 className="how3">Set delivery location</h3>
                        <p className="how4">Select the location where you want us to deliver</p>
                        </div>
                        
                        <div className="col-md-4 howw1">
                        <img className="pin" src={pin} alt="" />
                        <h3 className="how3">Set delivery location</h3>
                        <p className="how4">Select the location where you want us to deliver</p>
                        </div>

                        <div className="col-md-4">
                        <img className="pin" src={pin} alt="" />
                        <h3 className="how3">Set delivery location</h3>
                        <p className="how4">Select the location where you want us to deliver</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* four boxes section */}

            <section id="fourboxes1" data-aos="slide-up">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{display:"block", margin:"auto 0"}}>
                    <h2 className="fourboxes2">What We Offer</h2>
                    <p className="fourboxes3">Get your orders dispatched and delivered within 24 hours.</p>
                    <br /> <br />
                    </div>
                    <div className="col-lg-6">
                    <div className="row">
                        {offers.map((items) => (
                            <div className="col-lg-6" key={items.id}>
                                <div className="fourboxes-container"> 
                                 <div>
                                     <img className="fourboxes-img" src={items.image} alt="" />
                                    </div>
                                    <h5 className="fourboxes4">{items.text}</h5>
                                    <p className="fourboxes5">{items.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>  
                        </div>
                </div>   
                </div>
            </section>
            
            
      
    </>
  )
}

export default Body