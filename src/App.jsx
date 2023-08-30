import './App.css'
import {fetchMovieData, fetchScreeningsData} from './fetchData'
import AppMovies from './components/movies';
import CategoryDropdown from './components/categoryDropDown';
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
    <div>
      <div className="top-right">
        <CategoryDropdown/>
      </div>
      <AppMovies movies = {movies} screenings = {screenings} />
    </div>
  );
}

export default App

