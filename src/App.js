import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage"
import Auth from "./pages/auth/Auth";
import Header from "./components/global/Header";
import {auth} from './firebase/firebase.utils'
import './App.css';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            currentUser:null
        }
    }
    unsubscribeFromAuth=null;
    componentDidMount() {
       this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user});
        });
    }
    componentWillUnmount() {
            this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={Auth}/>
                </Switch>
            </div>
        );
    }

}

export default App;
