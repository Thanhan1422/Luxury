// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../component/LoginForm";

const LoginPage = () => {
  const handleLogin = ({ email, password }) => {
    console.log("Dữ liệu login từ form:", email, password);
    // TODO: Gọi API login ở đây nếu cần
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
