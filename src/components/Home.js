import React from "react"
import MyVerticallyCenteredModal from "./ModalPlayerSelector"
import { Container, Col, Row, Image, Card, Button, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return <div class="top">
    <Container fluid className="pagecontent">
      <Row>
          <Col className="d-flex justify-content-center">
          
          <Carousel>
          <Carousel.Item>
        <img className="mycarousel" src="https://i.ibb.co/0tpDP5V/Tips-tutorials-and-more-1.png" alt="Tips-tutorials-and-more-1" border="0" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>          
        </Carousel.Item>
        
        <Carousel.Item>
          <Image className="mycarousel"
            src="https://i.ibb.co/0jcHBNy/Tips-tutorials-and-more-3.png"
            onClick={() => setModalShow(true)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="mycarousel" alt="900x500" src="src/assets/chantier.jpg"/>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      </Col>
      </Row>
    
    
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  </div>
}

export default Home