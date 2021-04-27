import React, { useContext, useEffect } from "react";
import {USERACTIONS} from "./actions";
import * as ROUTES from "./RouteConstants";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/product/Products";
import Checkout from "./components/Checkout";
import PrivateRoute from "./utils/PrivateRoute";
import { useStateValue } from "./context/StateProvider";
import FirebaseContext from "./config/context";

function App(){
  const firebase = useContext(FirebaseContext);
  const dispatch = useStateValue()[1];
  const user = useStateValue()[0];
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: USERACTIONS.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: USERACTIONS.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch, firebase.auth]);
  return(
    <Router>
     <Switch>
        <Route exact path={ROUTES.HOME}>
            <Login user={user}/>
            <Home/>
            
        </Route>
        <PrivateRoute path={ROUTES.CHECKOUT}>
            <Header />
            <Checkout />
            <Footer />
        </PrivateRoute>
        <Route exact path={`${ROUTES.CATEGORY}/:category`}>
            <Header />
            <Products />
            <Footer />
        </Route>
       
        <Route exact path={ROUTES.HOME}>
           <Home/>
        </Route>
       
     </Switch>
    </Router>
  );
}
export default App;