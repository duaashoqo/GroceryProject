import React, { useState } from 'react';
import '../Style.css';
import 'antd/dist/antd.css';
import img1 from "../images/img1.jpg";
import img3 from "../images/img3.jpg";
import HomeItem from "../Component/HomeItem";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Carousel } from 'antd';
import {  Input } from 'antd';
import Grid from '@material-ui/core/Grid';
import Navigation from '../Component/Navigation';
import Group from '../Component/Group';
import {Link} from "react-router-dom";



function Home(props) {
    const{OnlineMarketItem,Categories,MyFav,MyItem,setDetailedItem}=props;
    const { Search } = Input;
    const[SeeAll2,setSeeAll2]=useState(false);
    const[SeeAll3,setSeeAll3]=useState(false);
    const[Change,setChange]=useState(false);
    const[GroupClicked,setGroupClicked]=useState(false);
    const[Cat,setCat]=useState(" ");
    const[Value, setValue] = useState(" ");

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
    <div class="flexRow" style={{ width: '100%',marginTop: 20,}}> 
    <span className="location"> Online Grocery</span>
    <Search placeholder="Search Store" onChange={handleChange} onEnter={handleChange}  />
    <Link to="/MyCart"><LocalGroceryStoreIcon className="store" /></Link>
    </div>

    <Carousel autoplay style={{marginLeft:10,marginRight:10}}>
    <div>
      <div ><img className="contentStyle" src={img1} alt="ddd" /></div>
      </div>
      <div>
      <div ><img className="contentStyle" src={img3} alt="ddd" /></div>
      </div>
      <div>
      <div ><img className="contentStyle" src={img1} alt="ddd" /></div>
      </div>
      <div>
      <div ><img className="contentStyle" src={img3} alt="ddd" /></div>
    </div>
  </Carousel>

  
{(Change)?<Grid container direction="row" style={{ justifyContent:'flex-start', marginTop:10,marginLeft:10,marginRight:10}} spacing={3}>
{OnlineMarketItem.map(item =>(item.Name.includes(Value))?<HomeItem item={item}  MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}></HomeItem>:null)}
</Grid>:null}

    <div class="flexRow" style={{  width: '100%', marginTop: 30,justifyContent: 'space-between'}}>
    <div className="H_lb1"> Best Selling</div>
    <button className="H_lb2" onClick={()=> {setSeeAll2(true)}} >See all</button>
    </div>

    {SeeAll2?<Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:15,justifyContent:'flex-start',flexWrap:'wrap'}}>
    {OnlineMarketItem.map(item =><HomeItem  item={item}  MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}></HomeItem>)}   
   </Grid>:<Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:15,justifyContent:'flex-start',overflow:'hidden',flexWrap:'nowrap'}}>
   {OnlineMarketItem.map(item =><HomeItem  item={item}  MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}></HomeItem>)}   
   </Grid>}

    <div class="flexRow" style={{  width: '100%', marginTop: 30,justifyContent: 'space-between'}}>
    <div className="H_lb1"> Groceries</div>
    <button className="H_lb2" onClick={()=> {setSeeAll3(true)}} >See all</button>
    </div>
   
    {SeeAll3?<Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:15,justifyContent:'flex-start',flexWrap:'wrap'}}>
    {Categories.map((item,index) =><Group className={`G${index+1}`} GroupImg={item.Img} setCat={setCat} setGroupClicked={setGroupClicked} GroupName={item.Name}></Group>)}
   </Grid>:<Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:15,justifyContent:'flex-start',overflow:'hidden',flexWrap:'nowrap'}}>
    {Categories.map((item,index) =><Group className={`G${index+1}`} setCat={setCat} GroupImg={item.Img} setGroupClicked={setGroupClicked} GroupName={item.Name}></Group>)}
    </Grid>}

     {GroupClicked?<Grid container direction="row" spacing={3} style={{marginTop:10,marginLeft:25,justifyContent:'flex-start',flexWrap:'wrap'}}>
     {OnlineMarketItem.map(item =>item.Category===Cat?<HomeItem item={item}  MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}></HomeItem>
     :null)}</Grid>:<div></div>}




   

    <Navigation/>
  
</>

  );
}

export default Home;
