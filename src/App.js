import './App.css';
import Start from './Pages/Start';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Data from './AppData/Data';
import MyCart from './Pages/MyCart';
import ProductDetail from './Pages/ProductDetail';
import Product from './Pages/Product';
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
    <Router basename="/Grocery_App">
     <div> 
     <Route  path="/ProductDetail">
      <ProductDetail setMyFav={setMyFav}  MyFav={MyFav} DetailedItem={DetailedItem} setDetailedItem={setDetailedItem} MyItem={MyItem} setMyItem={setMyItem} />
     </Route>
     <Route  path="/Explore">
      <Explore Categories={Categories} setSelectedCategory={setSelectedCategory} OnlineMarketItem={OnlineMarketItem} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem} />
     </Route>
     <Route  path="/Product">
      <Product SelectedCategory={SelectedCategory} OnlineMarketItem={OnlineMarketItem} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem}/>
     </Route>
     <Route  path="/MyCart">
      <MyCart MyItems={MyItem} setMyItems={setMyItem} />
     </Route>
     <Route  path="/Favorites">
      <Favorites MyFavorite={MyFav} setMyItem={setMyItem} MyItem={MyItem} setDetailedItem={setDetailedItem}/>
     </Route>
     <Route  path="/Home">
     <Home OnlineMarketItem={OnlineMarketItem}  Categories={Categories} MyFav={MyFav} MyItem={MyItem} setDetailedItem={setDetailedItem} />                                                                             
     </Route>
     <Route  path="/LogIn">
     <LogIn setIsAuth={setIsAuth}/>
     </Route>
     <Route  path="/SignUp">
     <SignUp setIsAuth={setIsAuth}/>
     </Route>
     <Route  path="/Account">
      <Account/>
     </Route>
     <Route  path="/CheckOut" >
      <CheckOut MyItem={MyItem}/>
     </Route>
     
     <Route exact path="/">
     <Start/>
     </Route>
     

    </div>
  </Router>

  );
}

export default App;
