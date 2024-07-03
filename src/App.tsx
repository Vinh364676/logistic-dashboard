import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import "./sass/index.scss";
import LayoutApp from "./component/global/Dashboard/Layout";
import SignIn from "./component/pages/Sign-in/SignIn";
import { Provider } from "react-redux";
import { store } from "./component/redux/store";

function App() {
  const [hasValidToken, setHasValidToken] = useState(false);

  const checkTokenValidity = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
       
        
        setHasValidToken(true);
      } catch (error) {
        console.error("Invalid token:", error);
        setHasValidToken(false);
        localStorage.removeItem("token"); 
      }
    } else {
      setHasValidToken(false);
    }
  }, []);

  useEffect(() => {
    checkTokenValidity();
  }, [checkTokenValidity]);

  const handleLoginSuccess = useCallback(() => {
    checkTokenValidity();
  }, [checkTokenValidity]);

  return hasValidToken ? (
    <Provider store={store}>
      <LayoutApp />
    </Provider>
  ) : (
    <SignIn onLoginSuccess={handleLoginSuccess} />
  );
}

export default App;
