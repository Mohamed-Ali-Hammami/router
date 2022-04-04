 import { Link } from "react-router-dom";
import React from "react";
import Stars from "../Stars/Stars";
 import './moviecard.scss';
 


const MovieCard = ({movie : {time, gender, title , year , image , desc , rate,trailer , filmlink ,id },movies,setMovies,})=> {
    return (
      <div class="cellphone-container">    
      <div class="movie">       
        <div class="menu"><i class="material-icons"></i></div>
        {/* <div class="movie-img"></div> */}
        <img  className="movie-img" src={image} alt="movieimage" />
        <div class="text-movie-cont">
          <h2></h2>
          <div class="mr-grid">
            <div class="col1">
              <h1 className='heading' >{title}</h1>
              <ul class="movie-gen">
                <li>{time}  /</li>
                <li>{gender}</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5 className='heading'>SUMMARY</h5>
            </div>
            <div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">{desc}</p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p><Stars class="movie-actors" rating={rate} isEdit={false}></Stars></p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <a href={trailer} target="_blank"> 

            <div class="col2"><div class="watch-btn"><h3 className='watch-btn-text heading'><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
            </div>
            </a>
            <a href={filmlink} target="_blank"> 

            <div class="col2"><div class="watch-btn"><h3 className='watch-btn-text heading'><i class="material-icons">&#xE037;</i>WATCH MOVIE</h3></div>
            </div>
            </a>
            
             <Link to={`/moviedetails/${id}`}>
            <div class="col2" ><div class="watch-btn"><h3 className='watch-btn-text heading'><i class="material-icons">&#xE037;</i>Show More</h3></div>
            </div>
            /</Link>
            
            <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
  </div>

    );
  }
export default MovieCard
