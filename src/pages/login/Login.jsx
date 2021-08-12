import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="container">
      <form className="loginForm">
      <h1 className="loginTitle">Obter Acesso</h1>
      <div className="loginIcons">
      <span className="user">
      <FaUserCircle size={25} cor={"rgba(0,0,0, 0.6)"} />
				</span>
        <input
          type="email"
          placeholder="Digite seu email"
          className="loginInput"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Digite a senha"
          className="loginInput"
          onChange={(event) => setPassword(event.target.value)}
        />
       <span className="password">
        <IoIosLock size={32} cor={"rgba(0,0,0, 0.6)"} />
				</span>
      </div>
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
