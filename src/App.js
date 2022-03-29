import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieForm from "./components/MovieForm/MovieForm";

function App() {
  const [filterText, setFilterText] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const data = [
    {
      id: Math.random(),
      title: "The Shawshank Redemption",
      year: 1994,
      rate: 5,
      image: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
      trailer : "https://www.youtube.com/watch?v=-FZ-pPFAjYY",
      desc : "Nadia",
      //filmlink : 
    },
    {
      id: Math.random(),
      title: "The Godfather",
      year: 1972,
      rate: 3,
      image:
        "https://e.snmc.io/i/300/s/b87e1473d14c14fddb66b9c1560cc095/5908468",
        trailer : "https://www.youtube.com/watch?v=-FZ-pPFAjYY",
        filmlink : "https://www166.ff-01.com/token=-hybzB13q8zq9TwRbVN7UA/1648587035/196.179.0.0/36/b/1f/46efbb00ff2a50a7a625452738c5d1fb-480p.mp4",
        desc : "dali",
    },
    {
      id: Math.random(),
      title: "The Godfather:PartII",
      year: 1974,
      rate: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer : "https://www.youtube.com/watch?v=9O1Iy9od7-A",
        desc :"Baristas"
        //filmlink : 
    },
    {
      id: Math.random(),
      title: "The Dark Knight",
      year: 2008,
      rate: 4,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        trailer : "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        filmlink : "https://evoload.io/e/FPRMiq8j3JdGzQ"
    },
    {
      id: Math.random(),
      title: "12 Angry Men",
      year: 1957,
      rate: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/08c56299bd22f83264a20025be29f9e6d47664792cde0d879bbd6f0cd3d673c8._RI_V_TTW_.jpg",
        trailer : "https://www.youtube.com/watch?v=_13J_9B5jEk",
        desc : "Feriel",
        //filmlink : 
    },
  ];

  const [movies, setMovies] = useState(data);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  console.log(filterText);

  return (
    <div>
      <Header
        setFilterText={setFilterText}
        setFilterRate={setFilterRate}
        filterRate={filterRate}
      />

      <MovieForm isEdit={false} addMovie={addMovie} />
      <MoviesList
        movies={movies}
        filterText={filterText}
        filterRate={filterRate}
      />
    </div>
  );
}

export default App;
