import '../Style.css';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

function Category(props) {

    const {img,text,className,setSelectedCategory}=props;
    function setValue(){
      setSelectedCategory(text);
    }
  return (
    <>
    <div style={{marginTop:'2%'}}>
          <Grid item xs={6} sm={3}>
         <Link to="/Product"><button class={className} style={{marginRight:15}} onClick={setValue} >
          <div > <img className="img1" src={img} alt="dodod"/></div>
          <label>{text}</label>
          </button></Link> 
         </Grid>

    </div>
    
</>

  );
}

export default Category;
