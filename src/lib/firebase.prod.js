import Farebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAQKxXJljEJxG-bQtC4WlJvrBF1XAAhNiM",
    authDomain: "netflix-clone-54542.firebaseapp.com",
    projectId: "netflix-clone-54542",
    storageBucket: "netflix-clone-54542.appspot.com",
    messagingSenderId: "124914978987",
    appId: "1:124914978987:web:5377be6f766f93e21067ee"
};

const firebase = Farebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };