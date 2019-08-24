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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;