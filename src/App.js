import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieForm from "./components/MovieForm/MovieForm";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  const [filterText, setFilterText] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const data = [
    {
      id: Math.random(),
      title: "TheShawshank Redemption",
      year: 1994,
      rate: 5,
      image: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
      trailer : "https://www.youtube.com/watch?v=6hB3S9bIaco",
      desc : "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
      filmlink : "https://evoload.io/e/f1mBkTrIni20A6"
    },
    {
      id: Math.random(),
      title: "The Godfather",
      year: 1972,
      rate: 3,
      image:
        "https://e.snmc.io/i/300/s/b87e1473d14c14fddb66b9c1560cc095/5908468",
        trailer : "https://www.youtube.com/watch?v=fB_8VCwXydM",
        filmlink : "https://www166.ff-01.com/token=-hybzB13q8zq9TwRbVN7UA/1648587035/196.179.0.0/36/b/1f/46efbb00ff2a50a7a625452738c5d1fb-480p.mp4",
        desc : "In 1945, in New York, the Corleones are one of the 5 mafia families. Don Vito Corleone, `godfather' of this family, marries his daughter to a bookmaker. Sollozzo, `godfather' of the Tattaglia family, offers Don Vito an association in drug trafficking, but he refuses. Sonny, one of his sons, is in favor of it. In order to deal with Sonny, Sollozzo tries to have Don Vito killed, but he escapes.",
    },
    {
      id: Math.random(),
      title: "The Godfather:PartII",
      year: 1974,
      rate: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer : "https://www.youtube.com/watch?v=9O1Iy9od7-A",
        desc :"Since the death of Don Vito Corleone, his son Michael reigns over the family. Brought to negotiate with the Jewish mafia, he then lost the support of one of his lieutenants, Frankie Pentageli. Narrowly escaping an attack, Michael tries to find the culprit, suspecting Hyman Roth, the head of the Jewish mafia.",
        filmlink : "https://dood.so/e/qt2k5xb2ccox"
    },
    {
      id: Math.random(),
      title: "The Dark Knight",
      year: 2008,
      rate: 4,
      image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        trailer : "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        filmlink : "https://evoload.io/e/FPRMiq8j3JdGzQ",
        desc : "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
    },
    {
      id: Math.random(),
      title: "12 Angry Men",
      year: 1957,
      rate: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/08c56299bd22f83264a20025be29f9e6d47664792cde0d879bbd6f0cd3d673c8._RI_V_TTW_.jpg",
        trailer : "https://www.youtube.com/watch?v=_13J_9B5jEk",
        desc : "Un jeune homme d'origine modeste est accusé du meurtre de son père et risque la peine de mort. Le jury composé de douze hommes se retire pour délibérer et procède immédiatement à un vote : onze votent coupable, or la décision doit être prise à l'unanimité. Le juré qui a voté non-coupable, sommé de se justifier, explique qu'il a un doute et que la vie d'un homme mérite quelques heures de discussion. Il s'emploie alors à les convaincre un par un.",
        filmlink : "https://uqload.org/q6h39mjrmg3a.html"
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
      <Routes>
   
        <Route
          path="/movieslist"
          element={
      <MoviesList
        movies={movies}
        filterText={filterText}
        filterRate={filterRate}
      />
          }
          />


     
           <Route 
           path="/moviedetails/:id"
          element={<MovieDetails movies={movies} />}
        />
     </Routes>
  </div>
  );
}

export default App;
