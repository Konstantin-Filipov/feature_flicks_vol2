import { useState, useEffect } from 'react';

async function fetchData() {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
}

export default fetchData;