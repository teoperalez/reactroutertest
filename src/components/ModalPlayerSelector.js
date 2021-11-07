import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Bottbar from './Bottbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  const [player, setPlayer] = React.useState(1);  

  return (

      
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose an Album
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col className="mb-3">
                        <Link to="/listen/whiskey_lullabies"><img height class="albumthumb" src="https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/71/88/8f/71888fbb-383f-8360-fc10-ea6923f04f37/5059654033211_cover.jpg/500x500bb.webp" alt = "Whiskey Lullabies" /></Link>
                    </Col>
                    <Col className="mb-3">
                        <img onClick={Bottbar()} class="albumthumb" src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/d2/3c/0c/d23c0cf9-94f9-1f4f-59cd-4f2fe211f4dc/5059741325915_cover.jpg/500x500bb.webp" alt = "RAIN" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(3)} class="albumthumb" src="https://i.ibb.co/L0qjF30/Untitled-design.jpg" alt = "Por Deseo" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(4)} class="albumthumb" src="https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/f1/28/cb/f128cb89-7806-2657-ddde-aeecb315fff8/5057917166270_cover.jpg/500x500bb.webp" alt = "Songs from the Road" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(5)} class="albumthumb" src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/4f/5a/d0/4f5ad018-6dff-1393-41cd-9f625d438eef/5057917707718_cover.jpg/500x500bb.webp" alt = "Revolution" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(6)} class="albumthumb" src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/df/73/38/df73385c-a89d-f109-9db9-4e5c12b7a7fd/5057917417105_cover.jpg/500x500bb.webp" alt = "Done Done Folk" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(7)} class="albumthumb" src="https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/21/f7/50/21f750d7-9486-3456-fa3c-68450c266d83/5057917497749_cover.jpg/500x500bb.webp" alt = "Live on 88.9 KRFC" />
                    </Col>
                    <Col className="mb-3">
                        <img onClick={() => setPlayer(8)} class="albumthumb" src="https://is3-ssl.mzstatic.com/image/thumb/Music/f4/37/4c/mzi.lkphpldq.jpg/500x500bb.webp" alt = "The Smell of Burning Leaves" />
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal