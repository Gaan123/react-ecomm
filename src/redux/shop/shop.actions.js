import ShopActionTypes from "./shop.types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export const fetchCollectionsStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
});
export const fetchCollectionsSuccess=(collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})
export const fetchCollectionsErrors=(e)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:e
})
export const fetchCollectionsStartAsync=(collectionsMap)=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        collectionRef.get()
            .then(snapshot=>{
                const  collectionMap=convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionMap));
            })
            .catch(e=>{
                dispatch(fetchCollectionsErrors(e.message))
            })
    }
}