import '../App.css';
import '../Style.css';
import {Link} from "react-router-dom";

function Start() {
  return (
    <>
 
 <div className="Home" >
    <div className="box ">

      <div className="Welcome">Welcome to our store</div>
      <div  className="Welcome2"> Ger your groceries in as fast as one hour</div>
      <div><Link to="/LogIn"> <button className="btn" >Get Started</button></Link></div>
    </div>
    </div>
</>
  );
}

export default Start;
