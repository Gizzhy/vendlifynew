// import axios from "axios"
import { useState } from "react";
import "../pages/slider.css"
// import users from "./data/users";
// import Table from "./data/component/Table";

function App() {
  const [details, setDetails] = useState(
  <div>
    <h1 className="slider1">Try the App</h1>
    <p className="slider2">Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
  </div>);

  return (
    <div className="app">
    <button onClick={()=>setDetails(
    <div>
      <h1 className="slider1">Try the App</h1>
      <p className="slider2">Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
    </div>)}
    >Customer</button>
    <button onClick={()=>setDetails(
    <div>
      <h1 className="slider1">All in One</h1>
      <p className="slider2">Unlock new levels of growth with seamless menu and orders management, multiple branches and team, easy payouts withdrawal and a lot more.</p>
    </div>)}>Vendors</button>
    <button onClick={()=>setDetails(
    <div>
      <h1 className="slider1">Become a Champ</h1>
      <p className="slider2">Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.</p>
    </div>)}>Riders</button>

    {details}
    <p >
      
    </p>
    </div>
  );
}

export default App;
