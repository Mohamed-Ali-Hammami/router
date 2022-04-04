import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "../Stars/Stars";


const MovieDetails = ({ movies}) => {
  const { idmovie } = useParams();

  const [movie, setMovie] = useState({});

  const findMovie = () => {
    setMovie(movies.find((el) => el.id === idmovie));
  };

  useEffect(() => {
    findMovie();
  }, []);

  return ( 

    <> 
    
   <h2>{movie.title}</h2>
    <p>{movie.year}</p>
    <h1>
    <Stars  rating = {movie.rate} isEdit={false}/></h1>
  
     <img  src={movie.image} width ="250px" />

    
    
    </>
    
    
    

  )
};

export default MovieDetails;
