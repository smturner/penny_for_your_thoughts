import React from 'react';

import { Card, CardGroup, ListGroup, Container, Row, Col } from 'react-bootstrap'
import MainNav from '../components/navbar/navbar';
import UserQuotes from '../Pages/userQuotes';
import UserQuoteList from '../components/UserQuoteList'
import AllQuotes from '../Pages/allQuotes';
import AllQuoteList from '../components/QuoteList'
import HomeCarousel from '../components/carousel/carousel'
import '../css/home.css'
const Home = () => {
  return (


    <div>
      <MainNav />
      <HomeCarousel />

      {/* <CardGroup className="text-dark">
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card> */}
        <Container>
          <Row>
            <Col>
            <UserQuotes>
              <UserQuoteList />
            </UserQuotes>
            </Col>
            <Col>
            <AllQuotes>
              <AllQuoteList />
            </AllQuotes>
            </Col>
          </Row>
        </Container>
        {/* <Card>
          <Card.Header>My Quotes</Card.Header>
          <Card.Body>


            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <Card.Header>Liked Quotes</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

      </CardGroup> */}
    </div>
  );
};

export default Home