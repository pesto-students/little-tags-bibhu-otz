import React from "react";
import { Route } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useStateValue()[0];
  return (
    <Route
      render={
        (routeProps) =>
          !!user ? (
            <>{children}</>
          ) : (
            <>
              {children}
             
            </>
          )
        
      }
    />
  );
};

export default PrivateRoute;