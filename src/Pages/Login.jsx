import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <button 
      onClick={() => {
        navigate("/profile");
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login