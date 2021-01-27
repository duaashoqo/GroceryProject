import T from "../true.png";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
export default function CheckOut(props) {
    const{MyItem}=props;
    MyItem.splice(0, MyItem.length)
    const history=useHistory();

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:'linear-gradient(to bottom,white,rgb(94, 189, 94)',height:'100vh'}} >
            <img src={T} alt="ddd" style={{marginTop:50,width:300,height:200}}></img>
            <label className="Ttl">Your Order has been accepted</label>
            <label className="Ttl">Your items has been placcd and is on it’s way to being processed</label>
            <Button variant="contained" color="primary" style={{width:"30%",height:50,color:'green',marginTop:20,background:'white'}} onClick={()=>history.push("/Home")} >Back to Home</Button>

        </div>
    )
}
