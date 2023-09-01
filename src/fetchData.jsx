export async function fetchMovieData() {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
}

export async function fetchScreeningsData() {
  const response = await fetch("/api/screenings");
  const screenings = await response.json();
  return screenings;
}
