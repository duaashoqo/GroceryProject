
import '../Style.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import { Rate } from 'antd';

function Review(props) {
    const {RateV}=props;
  return (
    
    <>
 

<div className='flexRow3'>
<div className="PR" >Review</div>
<div className='flexRow3'>
<div> <Rate style={{marginTop:12}} defaultValue={RateV} disabled /></div>
<div >
<BottomNavigation>
<BottomNavigationAction icon={<ChevronRightOutlinedIcon />}/>
</BottomNavigation>
</div>
</div>
</div>

    
</>

  );
}

export default Review;
      