import '../Style.css';
import Divider from '@material-ui/core/Divider';
import Title from '../Component/Title';
import React from 'react';
import MyItem from '../Component/MyItem';
import Navigation from '../Component/Navigation';
import {useHistory,Link} from "react-router-dom";
import {useLocation} from "react-router-dom";


function MyCart(props) {
  const { MyItems,setMyItems}=props;
  let history = useHistory();
  let location = useLocation();
  const {state} = location;
  if(state === undefined){
    history.replace("/LogIn")
  }

  let totalPrice=0;
  if(MyItems.length>0){
  MyItems.forEach(
  i=>totalPrice+=(i.Price*i.Count))
 }


totalPrice=parseFloat(totalPrice.toFixed(2));

  return (
    <>
    <Title text="My Cart"></Title>
    <div style={{marginTop:10}}>  <Divider /></div>
    {MyItems.length!==0?MyItems.map(item =>item.Count>0?<MyItem item={item} MyItem={MyItems} setMyItem={setMyItems}></MyItem>:null):<div className="NoItem">No item in cart yet.</div>}
  {MyItems.length!==0&&<Link to={{pathname: "/CheckOut",state: { auth:true}}} >
   <button className="btn2">Go to Checkout<span style={{marginTop:5,width:80,height:20}} className="totalP" >{`$${totalPrice}`}</span></button>
  </Link>}
    <Navigation/>

    </>

    

  );
}

export default MyCart;
