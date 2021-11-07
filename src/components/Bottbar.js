import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Offcanvas, Button, Carousel } from "react-bootstrap";


function Bottbar() {
   
    const [show, setShow] = React.useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <div class={show ? "stickybottomexpanded" : "stickybottom"}>
          
          <Container fluid>
          <Button variant="dark" onClick={show ? handleClose : handleShow}>
            Launch    
          </Button>
            <Row>
              <Col>
                <iframe src="https://open.spotify.com/embed/album/3xfgmFt37FaKTkBOxQgvyw?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>  
              </Col>
            </Row>
          </Container>
          
        </div>

      )
};

export default Bottbar;