import './App.css'
import {fetchMovieData, fetchScreeningsData} from './fetchData'
import AppMovies from './components/movies';
import CategoryDropdown from './components/categoryDropDown';
import {useState, useEffect} from 'react';

  function App() {
    
    const [movies, setMovies] = useState([]);    
    const [screenings, setScreenings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
      setSelectedCategory(category);

      // You can perform any additional actions with the selected category here
    };

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
        <CategoryDropdown onSelectCategory={handleCategorySelect}/>
      </div>
      <AppMovies movies = {movies} screenings = {screenings} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App

