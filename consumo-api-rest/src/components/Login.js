import React, { useState } from "react";
import { login } from "../services/auth";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(username, password);
      localStorage.setItem("token", data.token);
      setError("");
      if (onLogin) onLogin();
    } catch {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #e8f5e9 60%, #fff 100%)', borderRadius: 24, boxShadow: '0 6px 32px rgba(0,0,0,0.13)', padding: 40
    }}>
      <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', padding: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 400 }}>
        <img src="https://srvcas.espe.edu.ec/authenticationendpoint/images/Espe-Angular-Logo.png" alt="ESPE Logo" style={{ width: 140, marginBottom: 18, filter: 'drop-shadow(0 2px 8px #1b5e20aa)' }} />
        <h2 style={{ color: '#1b5e20', fontWeight: 900, fontSize: 32, letterSpacing: 1, margin: 0, lineHeight: 1.1, textAlign: 'center', textShadow: '0 2px 12px #fff' }}>
          Universidad de las Fuerzas Armadas<br />ESPE
        </h2>
        <h3 style={{ color: '#1b5e20', marginBottom: 32, fontWeight: 700, marginTop: 28, fontSize: 22, letterSpacing: 1, background: 'none', borderRadius: 0, padding: 0, width: 'auto', textAlign: 'center', boxShadow: 'none' }}>Iniciar sesión</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18, width: 300 }}>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" style={{ padding: 12, borderRadius: 8, border: '1.5px solid #1b5e20', fontSize: 17, background: '#f8fff5' }} />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" style={{ padding: 12, borderRadius: 8, border: '1.5px solid #1b5e20', fontSize: 17, background: '#f8fff5' }} />
          <button type="submit" style={{ background: 'linear-gradient(90deg, #388e3c 60%, #1b5e20 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: 14, fontWeight: 'bold', fontSize: 18, cursor: 'pointer', marginTop: 10, boxShadow: '0 2px 8px #1b5e2040', letterSpacing: 1 }}>Ingresar</button>
          {error && (
            <div style={{ color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
