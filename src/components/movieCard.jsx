import Image from 'react-bootstrap/Image';


function MovieCardInfo(props) {
  let movie = props.movie;
  let screening = props.screening;
  let keyIndex = props.itemKey;
  //console.log(screenings)
  const imageUrl = `https://cinema-rest.nodehill.se/${movie.description.posterImage}`;
 
  return (
    <div className="movie-card" key={keyIndex}>
      <div className='image'>
        <Image style={{ height: "25rem", width: "18rem" }} src={imageUrl} alt={movie.title} fluid />
        <div className='overlay'></div>
      </div>
      <div className='content'>
        <h3>{movie.title}</h3>
        <span className='screening_time'>{screening.time}</span>
      </div>
    </div>
  );
}

export default MovieCardInfo;