import '../App.css';
import '../Style.css';
import Title from '../Component/Title';
import Category from "../Component/Category";
import React, { useState } from 'react';
import '../Style.css';
import 'antd/dist/antd.css';
import HomeItem from "../Component/HomeItem";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {  Input } from 'antd';
import Grid from '@material-ui/core/Grid';
import Navigation from '../Component/Navigation';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";



function Explore(props) {
  const{ Categories,setSelectedCategory,OnlineMarketItem, MyFav,MyItem,setDetailedItem}=props;
  let history = useHistory();
  let location = useLocation();
  const {state} = location;
  if(state === undefined){
    history.replace("/LogIn")
  }
    const { Search } = Input;
    const [Change,setChange]=useState(false);
    const [Value, setValue] = useState(" ");
    function handleChange(e){
      setChange(true)
      setValue(e.target.value)
      console.log(e.target.value)
      if(e.target.value===""){
        setChange(false)
      }
    }

  return (

    <>
 
<Title text="Find Product"></Title>
<div  class="flexRow">
<Search placeholder="Search Store" onChange={handleChange} onEnter={handleChange}  />
  <Link to={{pathname: "/MyCart",state: { auth:true}}} ><LocalGroceryStoreIcon className="store" /></Link>
  </div>
  <Grid container direction="row" style={{ justifyContent:'flex-start', marginTop:10,marginLeft:10,marginRight:10}} spacing={3}>
  {(Change)?OnlineMarketItem.map(item =>(item.Name.includes(Value))?<HomeItem item={item}  MyFav={MyFav} MyItem={MyItem}  setDetailedItem={setDetailedItem} ></HomeItem>:null)
  :Categories.map((item,index) =><Category setSelectedCategory={setSelectedCategory}  img={item.Img} text={item.Name}  className={`product${index+1}`}></Category> )}
</Grid> 
<Navigation/>
</>
  );
}

export default Explore;
