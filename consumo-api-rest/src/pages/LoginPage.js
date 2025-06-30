import React from "react";
import Login from "../components/Login";

export default function LoginPage({ onLogin }) {
  return (
    <div>
      <Login onLogin={onLogin} />
    </div>
  );
}
