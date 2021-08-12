import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";

export default function List() {
  const location = useLocation();
  const list = location.list;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Lista</h1>
        <Link to="/newList">
          <button className="productAddButton">Criar</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Código:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Gênero:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Categória:</span>
              <span className="productInfoValue">{list.movieType}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Título da lista</label>
            <input type="text" placeholder={list.title} />
            <label>Tipo|Categória</label>
            <input type="text" placeholder={list.movieType} />
            <label>Gênero</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}