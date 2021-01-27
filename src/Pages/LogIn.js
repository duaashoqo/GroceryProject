import '../Style.css';
import Header from '../Component/Header';
import Input from '../Component/Input';
import Button from '../Component/Button';
import {
  Link,useHistory
} from "react-router-dom";
import {useState,useEffect} from "react";
import firebase from 'firebase';

function LogIn(props) {
  const {setIsAuth}=props;
  const [email,SetEmail]=useState("");
  const [flag,SetFlag]=useState("");
  const [password,SetPassword]=useState("");
  const [isSubmitted,SetSubmitted]=useState(false);
  const history=useHistory();
  const handleChangeEmail=(e)=>{
  const {value}=e.target;
    SetEmail(value);
  }
  const handleChangePassword=(e)=>{
    const {value}=e.target;
    SetPassword(value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    SetSubmitted(true);
   
  }
  useEffect(()=>{
    if(isSubmitted){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
       console.log(user);
       setIsAuth(true);
       history.replace("/Home",{auth:true}); 
    
      })
      .catch((error) => {
        SetFlag(true);
        console.log("not correct");
      });
    }
    return()=>{
      SetSubmitted(false)    
      }
  },[isSubmitted]);
  
  return (
    
    <>
       <form onSubmit={handleSubmit}>
       <div className="LeftStartR background">
       <div className="LeftStartC">
       <Header className1="lb1" lb1="Loging" className2="lb2" lb2="Enter your email and password"></Header>
       <label className="l_email">Email</label>
       <Input type="email" placeholder="Write your email" className="in_email" value={email}  onChange={handleChangeEmail}></Input>
       <label className="l_password">password</label>
       <Input type="password" placeholder="write your password" className="in_password"  value={password}  onChange={handleChangePassword}></Input>
       {flag&&<label  className="errAgree">**Email or password is not correct ! ! **</label>}
       <Button className="btn3" text="Log in"></Button>
       <label className="lb3">Don’t have an account? <Link to="/SignUp" className="link">Singup</Link></label>
       </div>
       <div className ="carrot"></div>
       </div>
       </form>
       
    
    
</>

  );
}

export default LogIn;
