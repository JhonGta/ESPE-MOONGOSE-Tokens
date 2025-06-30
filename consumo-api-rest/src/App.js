import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CourseCRUD from "./components/CourseCRUD";

function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <div style={{ background: '#f4f8f6', minHeight: '100vh' }}>
      {isLogged ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '24px 40px 0 0' }}>
            <button onClick={handleLogout} style={{ background: 'linear-gradient(90deg, #b71c1c 60%, #d32f2f 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 'bold', fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px #b71c1c40', letterSpacing: 1 }}>Cerrar sesión</button>
          </div>
          <HomePage />
          <CourseCRUD />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;