import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.jsx";
import CollectionPage from "../collection/CollectionPage";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching,selectIsCollectionLoaded} from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component{



    componentDidMount() {
        const {fetchCollectionsStartAsync}=this.props;
        fetchCollectionsStartAsync();
    }

    render(){
    const {match,isCollectionFetching,isCollectionLoaded}=this.props;
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=>(<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)}/>
        <Route path={`${match.path}/:collectionId`} render={(props)=>(<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>)}/>
    </div>
    )
};

}
const mapStateToProps=createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,
    isCollectionLoaded:selectIsCollectionLoaded
})
const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);