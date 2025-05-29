import { useState } from "react";
import React from "react";
import "./../styles/App.css";
import LoginForm from "./loginForm";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <div>
        <h1>Lift State Up Demo</h1>
        {isLogin ? (
          <h2>Welcome, you are logged in!</h2>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
