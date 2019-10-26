import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.jsx";
import CollectionPage from "../collection/CollectionPage";
import {firestore,convertCollectionSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component{

    state={
        loading:true
    };
    unsubscribeFromSnapshot=null;

    componentDidMount() {
        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collections');
       /* fetch('https://firestore.googleapis.com/v1/projects/storybooks-230718/databases/(default)/documents/collections')
            .then(res=>res.json())
            .then(
                collections=>{
                    console.log(collections)
                }
            )*/
        collectionRef.get()
            .then(snapshot=>{
                const  collectionMap=updateCollections(convertCollectionSnapshotToMap(snapshot));
                this.setState({loading:false})
            })

    }

    render(){
    const {match}=this.props;
    const {loading}=this.state;
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=>(<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
        <Route path={`${match.path}/:collectionId`} render={(props)=>(<CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}/>
    </div>
    )
};

}
const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);