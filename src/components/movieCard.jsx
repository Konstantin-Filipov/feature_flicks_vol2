import Image from 'react-bootstrap/Image';

function formatScreeningTime(screeningTime){

  const myArray = screeningTime.split("T");
  
  let date = myArray[0];
  let time = myArray[1].split(":00.");
  time = time[0];

  return `${date} ${time}`;
}

function formatMovieLength(lengthInMinutes) {
  const hours = Math.floor(lengthInMinutes / 60);
  const minutes = lengthInMinutes % 60;
  
  // Create the formatted string
  const formattedMovieLength = ` ${hours}h ${minutes}min`;

  return formattedMovieLength;
}

function MovieCardInfo(props) {
  let movie = props.movie;
  let screening = props.screening;
  let keyIndex = props.itemKey;
  
  const imageUrl = `https://cinema-rest.nodehill.se/${movie.description.posterImage}`;
  
  let screeningTime = formatScreeningTime(screening.time);
  let movieLength = formatMovieLength(movie.description.length);

  return (
    <div className="movie-card" key={keyIndex}>
      <div className='image'>
        <Image style={{ height: "25rem", width: "18rem" }} src={imageUrl} alt={movie.title} fluid />
        <div className='overlay'></div>
      </div>
      <div className='content'>
        <h3>{movie.title}</h3>
        <span className='screening_time'>{screeningTime}</span>
        <span className='screening_length'>{movieLength}</span>
      </div>
    </div>
  );
}

export default MovieCardInfo;