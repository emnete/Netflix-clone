import React, { useState, useEffect, } from "react";
import axios from "../../axios";
import "./NetflixRow.css";
import MovieTrailer from "movie-trailer";
import YouTube from "react-youtube";



const base_url = "https://image.tmdb.org/t/p/original";

function NetflixRow({ titleRow, fetchUrl, largeRow,}) {
  const [netflix, setNetflix] = useState([]);
  
  const [trailerUrl, setMovieTrailer] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //  console.log(request);
      
      setNetflix(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(netflix);
  
  const opt = {
    width: "100%",
    height: "320px",
    playerVars: {
      autoplay: 1,
    },
  };
  
  const clickHandler = (netflix) => {
    if (trailerUrl) {
      setMovieTrailer("");
    } else {
      MovieTrailer(netflix?.title || netflix?.name || netflix?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setMovieTrailer(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
    
  };
  
 

  return (
    <div className="row">
 
      <h1>{titleRow}</h1>

      <div className="row__posters" >
          {netflix.map((movie) => (
            <img
            onClick={() => clickHandler(movie)}
            key={movie.id}
              className={`row__poster ${largeRow && "row__posterLarge"}`}
              src={`${base_url}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
      <div style={{ padding: "30px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opt} />}
      </div>
    </div>
  );
}

export default NetflixRow;
