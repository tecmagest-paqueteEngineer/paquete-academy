import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="images/logoafronetfilmes.png"
            alt="AfronetFilme"
          />
          <button className="loginButton">Entrar</button>
        </div>
      </div>
      <div className="container">
        <h1>Plataforma Africana de Filmes & Séries.</h1>
        <h2>Assista quando quiser e sem limite. *Cancele a qualquer momento.</h2>
        <p>
        Pronto para Assistir? Informe seu email para criar, ou reinicie sua assinatura.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Digite seu email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
            Inicie Já
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="Digite o usuário" ref={usernameRef} />
            <input type="password" placeholder="Digite a senha" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Iniciar
            </button>
          </form>
        )}
        <span>
        *Após 30 dias, o AfronetFilmes é renovado automaticamente por U$ 1,49/mês.
        </span>
      </div>
    </div>
  );
}