import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage"
import Auth from "./pages/auth/Auth";
import Header from "./components/global/Header";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from "./redux/user/user.action";
import './App.css';

class App extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):(<Auth/>)}/>
                </Switch>
            </div>
        );
    }

}
const mapStateToProps=state=>({
    currentUser:state.user.currentUser
});

const mapDispatchToProps = dispatch=>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
