import firebase from 'firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Title from '../Component/Title';
import Navigation from '../Component/Navigation';
import Divider from '@material-ui/core/Divider';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";



export default function Account() {
    let history = useHistory();
    let location = useLocation();
    const {state} = location;
    if(state === undefined){
      history.replace("/LogIn")
    }
    function LogOut(){
        firebase.auth().signOut().then(() => {
            history.push("/LogIn");
        }).catch((error) => {
          });
    }
    return (
        <>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Title text="Account"></Title>
              <div style={{width:'100%'}}> <Divider /></div>
              <Button variant="contained"  style={{width:"40%",height:50,color:'  white ',marginTop:20,background:'black',borderRadius:19,fontWeight: 600,fontSize: 14}} onClick={LogOut} startIcon={<ExitToAppIcon/>}>Log Out</Button>
        </div>
        <Navigation/>
        </>
        
    )
}
