import React from "react";

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 24 }}>
      <img src="https://srvcas.espe.edu.ec/authenticationendpoint/images/Espe-Angular-Logo.png" alt="ESPE Logo" style={{ width: 120, marginBottom: 12, filter: 'drop-shadow(0 2px 8px #1b5e20aa)' }} />
      <h2 style={{ color: '#1b5e20', fontWeight: 900, fontSize: 32, letterSpacing: 1, margin: 0, lineHeight: 1.1, textAlign: 'center', textShadow: '0 2px 12px #fff' }}>
        ¡Bienvenido al Sistema de Gestión de Cursos ESPE!
      </h2>
      <p style={{ color: '#333', fontSize: 18, marginTop: 18, textAlign: 'center', maxWidth: 600 }}>
        Aquí podrás crear, editar y administrar los cursos de la Universidad de las Fuerzas Armadas ESPE de manera sencilla y profesional.
      </p>
    </div>
  );
}
