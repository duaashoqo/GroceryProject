
import '../Style.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import { useHistory } from "react-router-dom";

    
  
    
    function MyFav(props) {
                const {item,setDetailedItem}=props;
                let history = useHistory();

function setValue(){     
  setDetailedItem({Name:item.Name,Weight:item.Weight,Price:item.Price,Img:item.Img,Description:item.Description,N:item.N,Review:item.Review,Count:item.Count,InFav:item.InFav,Key:item.Key})
  history.push("/ProductDetail",{auth:true});


}
    
      return (
        <>
   
    {item.InFav?<div> <div className='flexRow2'>
    <div style={{width:400,height:200}}><img style={{marginTop:15,marginLeft:20,width:400,height:200}}  src={item.Img} alt="dodo"/></div>
    <div  className='flexCol2' style={{marginTop:50,marginLeft:40,width:'100%'}} >
    <div className="flexRow3" style={{marginTop:20}}><div className="d1">{item.Name}</div></div>
    <div className="d2" style={{marginTop:20}}>{item.Weight}</div>
    </div>
    <div  className="d1"style={{marginTop:100}} ><div></div>{`$${item.Price}`}</div>
    <div >

      <BottomNavigation>
        <BottomNavigationAction style={{marginTop:93,height:10}}  icon={<ChevronRightOutlinedIcon />} onClick={setValue} ></BottomNavigationAction>
      </BottomNavigation>
      </div>
       
        </div>
            <div style={{marginTop:30}}>  <Divider /></div></div>:<div>No favorite yet</div>}
       
    </>
    
      );
    }
    
    export default MyFav;
    