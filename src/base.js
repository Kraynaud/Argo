import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMze9p6R10Zc-IvDm1HAbElWT_ajOlXOk",
    authDomain: "argo-12848.firebaseapp.com",
    databaseURL: "https://argo-12848.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;
