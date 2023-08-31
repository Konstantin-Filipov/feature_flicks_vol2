import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MovieCardInfo from './movieCard';

export default function AppMovies({movies, screenings, selectedCategory}){
    //console.log(screenings.length)
    console.log(selectedCategory);
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