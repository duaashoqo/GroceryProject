import '../Style.css';
import Header from '../Component/Header';
import Input from '../Component/Input';
import Button from '../Component/Button';
import {useState,useEffect} from "react";
import firebase from 'firebase';
import {Link,useHistory} from "react-router-dom";

import * as yup from 'yup';
let schema = yup.object().shape({
  User: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required('Password is required'),

 
});
function SignUp(props) {
  const history=useHistory();
  const {setIsAuth}=props;
  const [User,SetUser]=useState("");
  const [email,SetEmail]=useState("");
  const [password,SetPassword]=useState("");
  const [isSubmitted,SetSubmitted]=useState(false);
  const [errors,SetErrors]=useState([" "," "," "]);
  const [isValid,SetIsValid]=useState(false);
  
  const data={User,email,password};
  const handleChangeUser=(e)=>{
    const {value}=e.target;
    SetUser(value);

  }
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
    ValidationData(data);

  }

  useEffect(()=>{
    if(isSubmitted){
      ValidationData(data);
    }
    if(isValid){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        setIsAuth(true);
        history.push("/LogIn");      
      })
      .catch((error) => {
      console.log(error);
  
      });}

  },[User,email,password,isValid]);

  const ValidationData=(data)=>{
     
    schema.validate(data,{abortEarly: false}).then((valid)=> {
      if(valid){
      
                  SetErrors([" "," "," "]);
                  SetIsValid(true);
                          
       }

         
      })
      .catch( (err) =>{
        const newError=err.inner.reduce((acc,curr)=>{
          acc[curr.path]=curr.message;
          return acc;},{});
          SetErrors(newError);
          console.dir(err);
          SetIsValid(false);

          
         
          
     
      });
    };
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="LeftStartR background">
      <div className="LeftStartC">
       <Header className1="lb1" lb1="Sign Up" className2="lb2" lb2="Enter your credentials to continue"></Header>
       <label className="l_username">Username</label>
       <Input type="text" value={User}  onChange={handleChangeUser} placeholder="Write your name" className="in_username"></Input>
       {errors.User&& <label htmlFor="User" style={{color:'red'}}>{errors.User}</label>}
       <label className="l_email">Email</label>
       <Input type="email" value={email}  onChange={handleChangeEmail} placeholder="Write your email" className="in_email"></Input>
       {errors.email&& <label htmlFor="email" style={{color:'red'}}>{errors.email}</label>}
       <label className="l_password">password</label>
       <Input type="password" value={password}  onChange={handleChangePassword} placeholder="write your password" className="in_password"></Input>
       {errors.password&& <label htmlFor="password" style={{color:'red'}}>{errors.password}</label>}
       <label className="privacy">By continuing you agree to our Terms of Service and <span style={{color: '#53B175'}}>Privacy Policy.</span></label>
       <Button type="submit" className="btn" text="Sign Up"></Button>
       <label className="lb3">Already have an account? <Link to="/LogIn" className="link">Login</Link></label>
       </div>
       <div className ="carrot"></div>
     </div>
     </form>



  );
}

export default SignUp;
