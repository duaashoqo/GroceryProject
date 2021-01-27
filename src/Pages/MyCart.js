import '../Style.css';
import Divider from '@material-ui/core/Divider';
import Title from '../Component/Title';
import React from 'react';
import MyItem from '../Component/MyItem';
import Navigation from '../Component/Navigation';
import {useHistory} from "react-router-dom";




function MyCart(props) {
  const { MyItems,setMyItems}=props;
  const history=useHistory();

  let totalPrice=0;
  if(MyItems.length>0){
  MyItems.forEach(
  i=>totalPrice+=i.Price*i.Count)
 }
function CheckOut(){
  if(MyItems.length>0){
    history.push("/CheckOut")

}}

totalPrice.toFixed(3);

  return (
    <>
    <Title text="My Cart"></Title>
    <div style={{marginTop:10}}>  <Divider /></div>
    {MyItems.length!==0?MyItems.map(item =>item.Count>0?<MyItem item={item} MyItem={MyItems} setMyItem={setMyItems}></MyItem>:null):<div className="NoItem">No item in cart yet.</div>}
   <button className="btn2">Go to Checkout<span style={{marginTop:5,width:80,height:20}} className="totalP" onClick={CheckOut}>{`$${totalPrice}`}</span></button>
    <Navigation/>

    </>

    

  );
}

export default MyCart;
