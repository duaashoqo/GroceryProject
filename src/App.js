import './App.css';
import Start from './Pages/Start';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Data from './AppData/Data';
import MyCart from './Component/MyCart';
import ProductDetail from './Pages/ProductDetail';
import Product from './Component/Product';
import Favorites from './Pages/Favorites';
import React, { useState } from 'react';
import CheckOut from './Pages/CheckOut';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";





function App() {
  const [SelectedCategory,setSelectedCategory]=useState("");
  const [isAuth,setIsAuth]=useState(false);
  const [MyFav, setMyFav] = useState([]);
  const [MyItem, setMyItem] = useState([]);
  const [DetailedItem, setDetailedItem] = useState({ })
  let OnlineMarketItem=[];
  for(let i=0;i<19;i++){
    OnlineMarketItem.push(Data.Product[i]);
    }
let CategoriesName=[];
let Categories=[];
OnlineMarketItem.map(item=>(!CategoriesName.includes(item.Category))?AddToCategory(item.Category,item.CatImg):null);
  function AddToCategory(Category,CatImg)
  {
    Categories.push({Name:Category,Img:CatImg});CategoriesName.push(Category);
  }
 



  return (
    <Router>
     <div> 
     <Route  path="/ProductDetail">
     {isAuth?<ProductDetail setMyFav={setMyFav}  MyFav={MyFav} DetailedItem={DetailedItem} setDetailedItem={setDetailedItem} MyItem={MyItem} setMyItem={setMyItem} />:<LogIn/>}
     </Route>
     <Route  path="/Explore">
     {isAuth?<Explore Categories={Categories} setSelectedCategory={setSelectedCategory} OnlineMarketItem={OnlineMarketItem} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem} />:<LogIn/>}
     </Route>
     <Route  path="/Product">
     {isAuth?<Product SelectedCategory={SelectedCategory} OnlineMarketItem={OnlineMarketItem} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}/>:<LogIn/>}
     </Route>
     <Route  path="/MyCart">
     {isAuth?<MyCart MyItems={MyItem} setMyItems={setMyItem} />:<LogIn/>}
     </Route>
     <Route  path="/Favorites">
     {isAuth?<Favorites MyFavorite={MyFav} setMyItem={setMyItem} MyItem={MyItem} setDetailedItem={setDetailedItem}/>:<LogIn/>}
     </Route>
     <Route  path="/Home">
     {isAuth?<Home OnlineMarketItem={OnlineMarketItem}  Categories={Categories} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem} />:<LogIn/>}                                                                             
     </Route>
     <Route  path="/LogIn">
     <LogIn setIsAuth={setIsAuth}/>
     </Route>
     <Route  path="/SignUp">
     <SignUp setIsAuth={setIsAuth}/>
     </Route>
     <Route  path="/Account">
     {isAuth?<Account/>:<LogIn/>}
     </Route>
     <Route  path="/CheckOut" >
     {isAuth?<CheckOut MyItem={MyItem}/>:<LogIn/>}
     </Route>
     
     <Route exact path="/Start">
     <Start/>
     </Route>
     

    </div>
  </Router>

  );
}

export default App;
