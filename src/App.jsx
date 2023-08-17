import './App.css'
import fetchData from './fetchData'
import MovieCardInfo from './components/movieCard'
import {useState, useEffect} from 'react';

function displayMovies( data )
{
  return(
    <div>
      {
        data.map((movie, i)=>(
          <div key={i}>
            <MovieCardInfo item = {movie}/>
          </div>
        ))}
    </div>
  );
}

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchDataAndDisplay() {
      const data = await fetchData();
      setMovies(data);
    }

    fetchDataAndDisplay();
  }, []);

  return (
    <div>
      <h1>Feature Flicks</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li> 
        ))}
      </ul>
    </div>
  )
}

export default App
