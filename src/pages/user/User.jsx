import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuário</h1>
        <Link to="/newUser">
          <button className="userAddButton">Criar</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Nome do Completo</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da conta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Usuário</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Detalhes do Contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+55 41 985310 459</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">fpaquete@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Paraná | Brasil</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nome do Usuário</label>
                <input
                  type="text"
                  placeholder="Digite um nome de usuário"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder="Digite o primeiro e o ultimo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Digite o emal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="Digite o telefone"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder="Digite o endereço"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}