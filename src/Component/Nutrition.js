import '../Style.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
function Nutrition(props) {
    const {N}=props;
  return (
    
    <>
 
<div className='flexRow3'>
<div className="PR" >Nutrition</div>
<div className='flexRow3'>
<div style={{marginTop:20}} ><label className="N" >{N}</label></div>

<div ><BottomNavigation>
<BottomNavigationAction  icon={<ChevronRightOutlinedIcon />} />
</BottomNavigation></div>
</div>
</div>

    
</>

  );
}

export default Nutrition;
