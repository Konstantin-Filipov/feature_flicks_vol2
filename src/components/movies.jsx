import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MovieCardInfo from './movieCard';
import { DateHeadline } from './headline';

export default function AppMovies({movies, screenings}){
    var date = 0;
    return(

        <section id = "movies" className='block movies-block'>
            <Container fluid>
                
                <Row>{
                    movies.map((movie, i)=>{
                        let screening = screenings[i];
                        console.log(screening);
                        if(date != screening.date){
                            date = screening.date;
                            {<DateHeadline date = {date}/>}
                        }
                    return (
                        <Col sm={3} key={i}>
                            <MovieCardInfo movie={movie} screening={screening} keyIndex={i} />
                        </Col>
                    );        
                })}
                </Row>
            </Container>
        </section>
    );
}