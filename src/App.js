import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage"
import Auth from "./pages/auth/Auth";
import Header from "./components/global/Header";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            this.setState({currentUser:userAuth})
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
