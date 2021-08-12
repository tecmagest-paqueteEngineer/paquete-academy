import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Filmes|Séries</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.image} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Código:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Gênero:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ano:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Classificação:</span>
              <span className="productInfoValue">{movie.maturityRating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Titúlo do Filme|Série</label>
            <input type="text" placeholder={movie.title} />
            <label>Ano</label>
            <input type="text" placeholder={movie.year} />
            <label>Gênero</label>
            <input type="text" placeholder={movie.genre} />
            <label>Classificação</label>
            <input type="text" placeholder={movie.maturityRating} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Vídeo</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movie.image}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
