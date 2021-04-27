import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./reducers/state_reducer";
import FirebaseContext from "./config/context";
import Firebase from "./config/firebase_config";

ReactDOM.render(
       <StateProvider reducer={reducer} initialState={initialState}>
       <FirebaseContext.Provider value={new Firebase()}>
       <App />
       </FirebaseContext.Provider>
       </StateProvider>,
       document.getElementById('root')
);
reportWebVitals();
