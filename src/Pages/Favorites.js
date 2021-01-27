import '../Style.css';
import Divider from '@material-ui/core/Divider';
import Title from '../Component/Title';
import MyFav from '../Component/MyFav';
import Navigation from '../Component/Navigation';
import React from 'react';


function Favorites(props) {
  const{MyFavorite,setMyItem,MyItem,setDetailedItem}=props;
function AddToCart(){
  if(MyItem.length>0){
  let flag=false;
  for(let i=0;i<MyFavorite.length;i++){
  for(let j=0;j<MyItem.length;j++){
    if(MyItem[j].Key===MyFavorite[i].Key){
      MyItem[j].Count++;
      flag=true;
    }


  }
  if(flag===false){
    let newMyItem=[...MyItem];
    newMyItem.push({Name:MyFavorite[i].Name,Weight:MyFavorite[i].Weight,Price:MyFavorite[i].Price,Img:MyFavorite[i].Img,Key:MyFavorite[i].Key,Count:1,InFav:MyFavorite[i].InFav})
    setMyItem(newMyItem)

  }
}

}
else  { 

let newMyItem=[];
for(let i=0;i<MyFavorite.length;i++){
  newMyItem.push({Name:MyFavorite[i].Name,Weight:MyFavorite[i].Weight,Price:MyFavorite[i].Price,Img:MyFavorite[i].Img,Key:MyFavorite[i].Key,Count:1,InFav:MyFavorite[i].InFav})
   }
   setMyItem(newMyItem)
}
MyFavorite.splice(0, MyFavorite.length)

}

  return (
    <>
    <Title text="Favorites"></Title>
    <div style={{marginTop:10}}>  <Divider /></div>
   { MyFavorite.length>0?MyFavorite.map(item => <MyFav item={item} setDetailedItem={setDetailedItem}></MyFav>):<div className="NoItem">No item in favorite.</div>}
    <button className="btn2" onClick={AddToCart} >Add All to Cart</button>
    <Navigation/>

       

     
    
    </>

    

  );
}

export default Favorites;
