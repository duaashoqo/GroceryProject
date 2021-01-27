import '../Style.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import React, { useState } from 'react';
function Detail2(props) {
const {PDetail}=props;
let [Expand,setExpand]=useState(false);

  return (
    
    <>
   
   <div className='flexRow3'>
   <div><p className="PR">Product Detail</p></div> 
   <div><BottomNavigation>
   <BottomNavigationAction icon={Expand?<ExpandMoreIcon />:<ExpandLessIcon />} onClick={()=>{setExpand(!Expand)}}/>
   </BottomNavigation>
   </div>
   </div>
   {Expand?<div><p className="PDescription">{PDetail}</p> </div>:<div></div>}
  
     
  
    
</>

  );
}

export default Detail2;
