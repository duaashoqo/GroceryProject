import '../App.css';
import '../Style.css';
import Divider from '@material-ui/core/Divider';
import Image from '../Component/Image';
import Detail from '../Component/Detail';
import Detail2 from '../Component/Detail2';
import Nutrition from '../Component/Nutrition';
import Review from '../Component/Review';
import React, { useState } from 'react';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";

function ProductDetail(props) {
    const {MyFav,setMyFav,DetailedItem,setDetailedItem,MyItem,setMyItem}=props;
    let history = useHistory();
    let location = useLocation();
    const {state} = location;
    if(state === undefined){
      history.replace("/LogIn")
    }
    const [Counter, setCounter]=useState(DetailedItem.Count);
    function AddToBasket(){
    let flag=true;
    MyItem.forEach((element,index) => {
    if(element.Key===DetailedItem.Key){
      element.Count=Counter;
      flag=false;
    }
    if(element.Count===0){
      MyItem.splice(index,1);
    }
  }
  );
     
  flag&&setMyItem(prevMyItem=>[...prevMyItem,{Name:DetailedItem.Name,Weight:DetailedItem.Weight,Price:DetailedItem.Price,Img:DetailedItem.Img,Key:DetailedItem.Key,Count:DetailedItem.Count,InFav:DetailedItem.InFav}]); 
   if(Counter>0){
  alert("Added Successfully")}
}


  return (
    <>
 
  <div className="flexRow2">
  <Image src={DetailedItem.Img} ></Image>
  <div className="flexCol2" >
  <Detail  MyFav={MyFav} Counter={Counter} setCounter={setCounter}  setMyFav={setMyFav} DetailedItem={DetailedItem} setDetailedItem={setDetailedItem} ></Detail>
  <div style={{marginTop:30}}>  <Divider /></div>
  <Detail2 PDetail={DetailedItem.Description}></Detail2>
  <div style={{marginTop:30}}>  <Divider /></div>
  <Nutrition N={DetailedItem.N} ></Nutrition>
  <div style={{marginTop:30}}>  <Divider /></div>
  <Review RateV={DetailedItem.Review}></Review>
  <button className="btn2" style={{width: '90%',height:67, borderRadius:19, marginTop:20,}} onClick={AddToBasket}>Add To Basket</button>
  </div> 
  </div>)
</>
  );
}

export default ProductDetail;
