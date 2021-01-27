import '../Style.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState,useEffect } from 'react';

function Detail(props) {
const {MyFav,setMyFav,DetailedItem,setDetailedItem,Counter,setCounter}=props;
const [Fav,setFav]=useState(DetailedItem.InFav);
const [Flag, setFlag]=useState(false);
const [FlagFav,setFlagFav] = useState(false)

function IncrementValue(){
  setCounter(prevCounter => prevCounter + 1)
  setFlag(true)


}
function DecrementValue(){
  if(Counter>0){
  setCounter(prevCounter => prevCounter - 1)
  setFlag(true)

}

}

useEffect(() => {
  let f=true;
  if(Flag)setDetailedItem(prevDetailedItem=>({...prevDetailedItem,Count:Counter}))
  if(FlagFav){
    MyFav.map((element,index)=>((element.Key===DetailedItem.Key)&&!Fav)?MyFav.splice(index,1):null) 
    setDetailedItem(prevDetailedItem=>({...prevDetailedItem,InFav:Fav}))
    Fav&&setMyFav(prevMyFav=>[...prevMyFav,{Name:DetailedItem.Name,Weight:DetailedItem.Weight,Price:DetailedItem.Price,Img:DetailedItem.Img,Key:DetailedItem.Key,Count:DetailedItem.Count,InFav:Fav}]);

  }

  return()=>{
  setFlag(false)
  setFlagFav(false)

  }
  
}, [Flag,FlagFav])


function AddToFav(){
  setFav(!Fav);
  setFlagFav(true);
 
 }
  return (
    
    <>
  <div className="flexRow3" style={{marginTop:'5%'}}>
  <div className="d1" style={{marginTop:25}}>{DetailedItem.Name}</div>
  <BottomNavigation>
  <BottomNavigationAction icon={Fav?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon />} onClick={AddToFav} />
  </BottomNavigation>
  </div>
  <div className="flexRow1k">
  <div className="d2" style={{marginLeft:20}}>{DetailedItem.Weight}</div>
  <div className="d2"></div>
  </div>
  <div className="flexRow4">
  <div className="flexRow3">
  <div><button className="AddBtn" onClick={DecrementValue}><RemoveIcon  /></button></div>
  <div style={{marginTop:15,marginLeft:10,marginRight:10}}><label>{Counter}</label></div>
  <div><button className="AddBtn"onClick={IncrementValue}><AddIcon  /></button></div>
  </div>
  <div className="d3" >{`$${DetailedItem.Price}`}</div>
  </div>
       
  
    
</>

  );
}

export default Detail;
