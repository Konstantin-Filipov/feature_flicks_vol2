import './App.css'
import {fetchMovieData, fetchScreeningsData} from './fetchData'
import AppMovies from './components/movies';
import {useState, useEffect} from 'react';

  function App() {
    
    const [movies, setMovies] = useState([]);    
    const [screenings, setScreenings] = useState([]);


    useEffect(() => {
      async function fetchDataAndDisplay() {
        const data = await fetchMovieData();
        setMovies(data);
        const screenData = await fetchScreeningsData();
        setScreenings(screenData);
      }
      fetchDataAndDisplay();
    }, []);
  
  return (
    <AppMovies movies = {movies} screenings = {screenings} />
  )
}

export default App

