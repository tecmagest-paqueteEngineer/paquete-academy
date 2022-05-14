import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome do Usuário</label>
          <input type="text" placeholder="Informe o nome do Usuário" />
        </div>
        <div className="newUserItem">
          <label>Nome Completo</label>
          <input type="text" placeholder="Digite o Primeiro e o Ultimo" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Digite o email" />
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="Digite uma senha" />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="Nº Telefone" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="Digite o endereço" />
        </div>
        <div className="newUserItem">
          <label>Generos</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Feminino</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Outros</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
  );
}
