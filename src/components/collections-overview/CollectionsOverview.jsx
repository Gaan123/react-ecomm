import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";


import CollectionPreview from "../preview-collection/CollectionPreview";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({collections}) => {

    return(

    <div className="collections-overview">
        {
            collections.map(({id,...otherCollectionProps})=>(<CollectionPreview key={id} {...otherCollectionProps}/>))
        }
    </div>
)};
export const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);