import "../pages/body.css"
import {Typewriter} from 'react-simple-typewriter'

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
      <p><span class="big-txt">Download on Google Play</span></p>
      </a>
</div>

</div>
      
    </>
  )
}

export default Body