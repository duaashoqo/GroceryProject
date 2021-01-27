import React from 'react';
import '../Style.css';
import HomeItem from "../Component/HomeItem";
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import TuneIcon from '@material-ui/icons/Tune';
import Title from '../Component/Title';
import Navigation from '../Component/Navigation';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";



function Product(props) {
  const{SelectedCategory,OnlineMarketItem,MyFav,MyItem,setDetailedItem}=props;
  let history = useHistory();
  let location = useLocation();
  const {state} = location;
  if(state === undefined){
    history.replace("/LogIn")
  }
  return (
    
    <>

<div  class="flexRow" style={{justifyContent:'space-between'}}>
      <div style={{marginTop:8}}> 
      <BottomNavigation>
      <Link to={{pathname: "/Explore",state: { auth:true}}}><BottomNavigationAction icon={<ArrowBackIosSharpIcon />} /></Link>
      </BottomNavigation></div>
      <Title text={SelectedCategory}></Title>
      <div style={{marginTop:3}}> 
      <BottomNavigation>
      <BottomNavigationAction icon={< TuneIcon/>} />
      </BottomNavigation></div>      
  </div>
  <Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:65,justifyContent:'flex-start',flexWrap:'wrap'}}>
  {OnlineMarketItem.map(item=>(item.Category===SelectedCategory)? <HomeItem item={item}  MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem} ></HomeItem>:null)}
   </Grid>
  
   <Navigation/>

</>

  );
}

export default Product;
