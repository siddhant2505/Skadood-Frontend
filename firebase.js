import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXOppuWM43GNNwmUsEPGu_yr4BaMNC2po",
    authDomain: "skadood-e3c8d.firebaseapp.com",
    projectId: "skadood-e3c8d",
    storageBucket: "skadood-e3c8d.appspot.com",
    messagingSenderId: "186522170611",
    appId: "1:186522170611:web:4e1c8aaa556b1dd3a03386"
  };

  let app;
if (firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig)
    
} else{
    app=firebase.app();

}

const db=app.firestore();
const auth=firebase.auth();

export {db, auth};
