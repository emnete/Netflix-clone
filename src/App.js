import "./App.css";
import Banner from "./Components/Banner/Banner";
import NetflixRow from "./Components/Row/NetflixRow";
import requestUrl from "./requestUrl";
import Nav from "./Components/NavBar/Nav";

// Hosting URL: https://netflix-clone-548dc.web.app



function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      
      <NetflixRow
        titleRow="NETFLIX ORIGINALS"
        fetchUrl={requestUrl.fetchNetflixOriginals}
        largeRow={true}
        
      />
      <NetflixRow titleRow="Trending Now" fetchUrl={requestUrl.fetchTrending} />
      <NetflixRow
        titleRow="Top Rated"
        fetchUrl={requestUrl.fetchTopRatedMovies}
      />
      <NetflixRow
        titleRow="Action Movies"
        fetchUrl={requestUrl.fetchActionMovies}
      />

      <NetflixRow
        titleRow="Comedy Movies"
        fetchUrl={requestUrl.fetchComedyMovies}
      />

      <NetflixRow
        titleRow="Horror Movies"
        fetchUrl={requestUrl.fetchHorrorMovies}
      />

      <NetflixRow
        titleRow="Romance Movies"
        fetchUrl={requestUrl.fetchRomanceMovies}
      />

      <NetflixRow
        titleRow="Documentary Movies"
        fetchUrl={requestUrl.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
