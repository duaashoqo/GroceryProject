import '../Style.css';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { useHistory } from "react-router-dom";

function Image(props) {
    const {src}=props;
    let history = useHistory();

  return (
    
    <>
    
  <div className=" flexRow2">
  <div style={{marginTop:'3%',width:"100%",height:'100%'}}  > 
  <img src={src} alt="ddd" style={{height:'60vh',width:"95%",marginLeft:5}}/>
  <button className="b" onClick={() => history.goBack()}>{<ArrowBackIosOutlinedIcon />}</button>
  </div>
  </div>
  
    
</>

  );
}

export default Image;
