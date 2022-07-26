import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import NewRelease from "./components/NewRelease";
import TopPicks from './components/TopPicks';
import TopBoxOffice from "./components/TopboxOffice";
import Watchlist from "./components/Watchlist";
import apiKey from "./API-key";
import axios from "axios";

function App() {
  const arr = {
    "adult": false,
    "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 75.646,
    "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 21617
  };

  const [newReleaseMovies, setnewReleaseMovies] = useState([arr]);
  const [topPicksMovies, settopPicksMovies] = useState([arr]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => {
        // console.log(res.data.results[0].backdrop_path);
        setnewReleaseMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => {
        // console.log(res.data.results[0].backdrop_path);
        settopPicksMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Watchlist /> */}
      {/* <h1>{apiKey}</h1> */}
      <NewRelease movieList={newReleaseMovies} />
      <div className="m-2 mt-5 ms-5">
        <h2 className=" text-warning">Top Picks <span className="material-icons">double_arrow</span></h2>
        <p className="m-0  text-light">Highest rated movies . . . </p>
      </div>
      <TopPicks movieList={topPicksMovies} />
      <div className="m-2 mt-5 ms-5">
        <h2 className=" text-warning">Top Box Office <span className="material-icons">double_arrow</span></h2>
        <p className="m-0  text-light">All time top Box Office collections . . . </p>
      </div>
      <TopBoxOffice />
      <div className="p-5 bg-secondary text-center">
        <div className="m-4 d-flex justify-content-center">
          <img src="../instagramIcon.png" alt="Instagram" />
          <img src="../facebookIcon.png" alt="Facebook" />
          <img src="../twitterIcon.png" alt="Twitter" />
          <img src="../youtubeIcon.png" alt="Youtube" />
        </div>
        <h5>Copyright © moviemania™ Ltd</h5>
      </div>
    </div >
  );
}

export default App;
