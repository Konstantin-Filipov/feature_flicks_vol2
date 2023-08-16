import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fetchData from './fetchData'

function App() {

  const { data, loading, error } = fetchData();
  if(!data)
  {
    console.log(error);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      {data.map(movie => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </div>

    </>
  )
}

export default App
