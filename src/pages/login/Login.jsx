import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="images/logoafronetfilmes.png"
            alt="AfronetFilmes"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Obter Acesso</h1>
          <input
            type="email"
            placeholder="Digite seu email ou telemóvel"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Entrar
          </button>
          <span>
          Novo(a) no AfronetFilmes?<b> Inscra-te agora.</b>
          </span>
          <small>
          Esta pagina é protegida. Usamos reCPTCHA, para garantir que você não é um robô.<b> Leia mais</b>.
          </small>
        </form>
      </div>
    </div>
  );
}