import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDzByxQaTB0tJzFHd-l4fPdgBfp-aK5mMQ",
    authDomain: "scheduler-c099a.firebaseapp.com",
    databaseURL: "https://scheduler-c099a-default-rtdb.firebaseio.com",
    projectId: "scheduler-c099a",
    storageBucket: "scheduler-c099a.appspot.com",
    messagingSenderId: "249746352271",
    appId: "1:249746352271:web:840098d98a5b93c0e328fa"
}

firebase.initializeApp(firebaseConfig);


export { firebase };