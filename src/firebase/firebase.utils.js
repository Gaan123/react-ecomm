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
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;