
import '../Style.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ClearIcon from '@material-ui/icons/Clear';
import{ useState } from 'react';
import Divider from '@material-ui/core/Divider';
import React, { useEffect } from 'react';




function MyItem(props) {
    const {MyItem,setMyItem,item}=props;
    const [Count, setCount]=useState(item.Count);
    const [Flag, setFlag]=useState(false);

    

function Subtract(){
  if(Count>0)
  {
    setCount(prevCount => prevCount - 1);
    setFlag(true)
  }
}
function Add(){
  setCount(prevCount => prevCount + 1);
  setFlag(true)


}
function DeleteItem(e){
  let newItems=[...MyItem];
  let index=e.target.Key;
  if (index !== -1) {
    newItems.splice(index, 1);
    setMyItem(newItems);
  }}
useEffect(() => {
  let newItems=[...MyItem];
    newItems.map((element)=>(element.Key===item.Key)?element.Count=Count:null)
    setMyItem(newItems);
  

  return () => {
    setFlag(false)
  }
}, [Flag])

  

  return (
    <>
   <div><div className='flexRow2'>
<div style={{width:400,height:200}}><img style={{marginTop:20,marginLeft:20,width:400,height:200}}  src={item.Img} alt="dodo"/></div>
<div  className='flexCol2' style={{marginTop:8,marginLeft:40,width:'100%'}} >
<div className="flexRow3" style={{marginTop:20}}><div className="d1">{item.Name}</div><div ><BottomNavigation>
<BottomNavigationAction className="d1" icon={<ClearIcon />} onClick={DeleteItem} />
</BottomNavigation></div></div>
<div className="d2" style={{marginTop:20}}>{item.Weight}</div>
<div className="flexRow4" style={{marginTop:50}}>
<div className="flexRow3">
<div ><button className="AddBtn" onClick={Subtract}><RemoveIcon  /></button></div>
<div style={{marginTop:15,marginLeft:10,marginRight:10}}><label>{Count}</label></div>
<div><button className="AddBtn"onClick={Add}><AddIcon  /></button></div>
</div >
<div className="d3" >{`$${item.Price}`}</div>
    </div>
    </div>
    </div>
    <div style={{marginTop:30}}>  <Divider /></div></div>
        


</>

  );
}

export default MyItem;
