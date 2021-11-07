import React from "react"
import { Container, Image, Col, Row, Card, CardGroup, Button, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const cardStyle = {
    
  height: "450px",
  width: "450px"
  
};

const cardLinkStyle = {
    
  color: 'white',
  textdecoration: "none"
};

function Listen() {
  
  
  return (
  
  <div class="listen">
    <Button >Previous</Button>
    <Button >Next</Button>
    <Container fluid className="pagecontent d-flex justify-content-center">
    <Row>
      <Col className="d-flex justify-content-center">
    
  <Card bg="dark" style={cardStyle}>
    <Card.Img  src="https://m.media-amazon.com/images/I/716MQHcws3L._SS500_.jpg" width="450px" height="450px" />
    <Card.ImgOverlay>
      <Card.Title>Whiskey Lullabies, 2019</Card.Title>
    </Card.ImgOverlay>
    
  </Card>
  </Col>
  <Col className="d-flex justify-content-center">
  <Card bg="dark" style={cardStyle}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col className="d-flex justify-content-center">
  <Card bg="dark" style={cardStyle}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    </Col>
    </Row>

      <Row>
        <Col>
        
        </Col>
      </Row>
    </Container>
  </div>

  )
}

export default Listen
