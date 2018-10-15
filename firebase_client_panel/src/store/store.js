import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
import notifyReducer from "./reducers/notifyReducers";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBbFcitt9E4kvuxdDEQsiIFGSUuYaI2ObY",
  authDomain: "reactclientpanel-c8f9c.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c8f9c.firebaseio.com",
  projectId: "reactclientpanel-c8f9c",
  storageBucket: "reactclientpanel-c8f9c.appspot.com",
  messagingSenderId: "839649464851"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Init Firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  settings: settingsReducer
});

// Check for Setting on Local Storage
if (localStorage.getItem("settings") === null) {
  // Default Settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  // Set to Local Storeage
  // local storage apenas armazena strings
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = {
  settings: JSON.parse(localStorage.getItem("settings"))
};

// Create store with reducers and initial state
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
