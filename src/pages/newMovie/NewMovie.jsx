import { useContext, useState } from "react";
import "./newMovie.css";
import storage from "../../service/firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [ismallImage, setIsmallImage] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setMovie({ ...movie, [event.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload " + progress + "% concluído");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (event) => {
    event.preventDefault();
    upload([
      { file: image, label: "image" },
      { file: imageTitle, label: "imageTitle" },
      { file: ismallImage, label: "ismallImage" },
      { file: movieTrailer, label: "movieTrailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo Filme|Série</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Imagem do Título</label>
          <input
            type="file"
            id="imageTitle"
            name="imageTitle"
            onChange={(event) => setImageTitle(event.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Imagem em Miniatura</label>
          <input
            type="file"
            id="ismallImage"
            name="ismallImage"
            onChange={(event) => setIsmallImage(event.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Título</label>
          <input
            type="text"
            placeholder="Título"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Ano</label>
          <input
            type="text"
            placeholder="Ano"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Gênero</label>
          <input
            type="text"
            placeholder="Gênro"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duração</label>
          <input
            type="text"
            placeholder="Duração"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Classificação ou Maturidade</label>
          <input
            type="text"
            placeholder="Classificação ou a maturidade"
            name="maturityRating"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>É uma Série?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>É uma Temporada?</label>
          <select name="isSeasons" id="isSeasons" onChange={handleChange}>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Temporada</label>
          <input
            type="text"
            placeholder="Temporada"
            name="season"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="movieTrailer"
            onChange={(event) => setMovieTrailer(event.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Vídeo</label>
          <input
            type="file"
            name="video"
            onChange={(event) => setVideo(event.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Criar
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Carregar
          </button>
        )}
      </form>
    </div>
  );
}