import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/global/Header";
import './App.css';
function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
