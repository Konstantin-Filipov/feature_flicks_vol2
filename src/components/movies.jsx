import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MovieCardInfo from './movieCard';
import { DateHeadline } from './headline';

function splitString(screening)
//splits the provided screening obj into separate pieces
{
    const [datePart, timePart] = screening.split('T');
    
    // Splitting the time part at ':'
    const [hours, minutes] = timePart.split(':');
    
    // Forming the desired outputs
    const formattedDate = datePart;
    const formattedTime = `${hours}:${minutes}`;
    return {date:formattedDate, time:formattedTime};
}



export default function AppMovies({movies, screenings}){
    //console.log(screenings.length)

    // Create a map of screening dates to movies
    const screeningsByDate = {};

    screenings.forEach((screening) => {
        const date = new Date(screening.time).toLocaleDateString();
        if (!screeningsByDate[date]) {
            screeningsByDate[date] = [];
        }
        screeningsByDate[date].push(screening);
    });

return (
  <section id='movies' className='block movies-block'>
    <Container fluid>{
        Object.keys(screeningsByDate).map((date) => (
            <div key={date}>
                <h2>{date}</h2>
                <Row>{
                    screeningsByDate[date].map((screening) => {
                    const movie = movies.find((m) => m.id === screening.movieId);
                    return (
                        <Col sm={3} key={screening.movieId}>
                        <MovieCardInfo movie={movie} screening={screening} />
                        </Col>
                    );
                })}
                </Row>
            </div>
        ))}
    </Container>
  </section>
);
}