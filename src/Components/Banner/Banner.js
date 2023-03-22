import React, { useEffect, useState } from "react";
import "../Banner/Banner.css";
import axios from "../../axios";
import requestUrl from "../../requestUrl";

function Banner() {
  const [netflix, setNetflix] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestUrl.fetchNetflixOriginals);
      // console.log(request);
      setNetflix(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(netflix);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${netflix?.backdrop_path}")`,
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="ban_title">
          {netflix?.title || netflix.name || netflix.original_name}
        </h1>

        <div className="ban_buttons">
          <button className="ban_button">Play</button>
          <button className="ban_button">My List</button>
        </div>

        <h3 className="ban_description">{truncate(netflix?.overview, 120)}</h3>
      </div>
      <div className="ban_bottomFade" />
    </header>
  );
}

export default Banner;
