import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmaQFELP_USmfVY-LZypZlJjA-la5466E",
    authDomain: "storybooks-230718.firebaseapp.com",
    databaseURL: "https://storybooks-230718.firebaseio.com",
    projectId: "storybooks-230718",
    storageBucket: "",
    messagingSenderId: "795200615188",
    appId: "1:795200615188:web:2025f7c12cac1ee1"
};
firebase.initializeApp(config);
export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if (!userAuth)return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot=await userRef.get();

    if (!snapshot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await userRef.set({
                displayName,email,createdAt,...additionalData
            })
        }catch (e) {
            console.log(e.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
    const collectionRef  = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj=>{

        const newDocRef=collectionRef.doc();
        batch.set(newDocRef,obj);
        console.log(newDocRef);
    });
    return await batch.commit();
}

export const convertCollectionSnapshotToMap=(collections)=>{

    const transformedCollection = collections.docs.map(doc=>{
        const {title,items}=doc.data();
        return {
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{});


}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;