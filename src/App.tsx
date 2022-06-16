import React, { useContext } from "react";
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private";
import { Link } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout();
    navigate('/')
  }
  return (
    <div className="app">
      <h1>header do site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">página privada</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
