import '../Style.css';
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";


function Navigation() {
    const [Value, setValue] = React.useState(0);
  


  return (
 <>

     
     <BottomNavigation  style={{marginTop:10,marginRight:15,justifyContent:'space-between'}}
      value={Value}
      onChange={(event, newValue)=>{setValue(newValue)}} showLabels>
    <div className="flexCol"><div><Link to={{
    pathname: "/Home",
    state: { auth:true}
  }}><BottomNavigationAction label="Shop" icon={<StoreIcon style={{color:"gray"}}/>} /></Link></div>
    <div><label style={{marginLeft:25}}>shop</label></div> </div>
    <div className="flexCol"><div><Link to={{
    pathname: "/Explore",
    state: { auth:true}
  }}><BottomNavigationAction label="Explore"  icon={<SearchIcon style={{color:"blue"}} />}/></Link></div>
    <div><label style={{marginLeft:18}}>Explore</label></div> </div>
    <div className="flexCol"><div><Link to={{
    pathname: "/MyCart",
    state: { auth:true}
  }}><BottomNavigationAction label="Cart" icon={<ShoppingCartIcon style={{color:"green"}}/>}/></Link></div>
    <div><label style={{marginLeft:18}}>My Cart</label></div> </div>
    <div className="flexCol"><div><Link to={{
    pathname: "/Favorites",
    state: { auth:true}
  }}><BottomNavigationAction label="Favorite" icon={<FavoriteIcon style={{color:"red"}}/>}/></Link></div>
    <div><label style={{marginLeft:18}}>Favorite</label></div> </div>
    <div className="flexCol"><div><Link to={{
    pathname: "/Account",
    state: { auth:true}
  }}><BottomNavigationAction label="Account" icon={<PermIdentityIcon style={{color:"black"}} />} /></Link></div>
    <div><label style={{marginLeft:18}}>Account</label></div> </div>
     </BottomNavigation> 

</>

  );
}

export default Navigation;
