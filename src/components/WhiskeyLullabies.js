import React from "react"
import { Container, Col, Row, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const linkStyle = {
    
    textDecoration: "none",
    color: 'white'
  };

function WhiskeyLullabies() {
    

    
    return (
        <div class="listenpage">
            
            <Container fuild className="pagecontent listenelem">
            <Link to="/listen" style={linkStyle}><h3>Go back to Discography</h3></Link>
                <Row className="gx-2 px-0">
                    <Col>
                        <Image className="fullalbumthumb" thumbnail src="https://m.media-amazon.com/images/I/716MQHcws3L._SS500_.jpg" />
                    </Col>
                    <Col >
                        <div class="albumtitle">
                            <h1>Whiskey Lullabies</h1>
                            <h5>Produced by Teo Peralez and Kenny Peralez</h5>
                            <h5>Released in 2019</h5>
                        
                            <h6>Credits:</h6>
                                
                        </div>
                        

                    </Col>
                    
                    
                </Row>
                </Container>
                <Container fluid> 
                <Row>
                <Col xxl="2">
                    <iframe width="300px"height="650px" src="https://open.spotify.com/embed/album/3xfgmFt37FaKTkBOxQgvyw?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </Col>
                <Col>
                <div class="albumcontents">
                                Teo Peralez - Guitar, Lead Vocals, Lyrics<br/>
                                Don Cleason - Double Bass<br/>
                                Steve Grey - Cajon, Drums<br/>
                                Kenny Peralez - Lead Guitar<br/>
                                Andy Koeppel - Baritone Duitar, Madolin, Hand Drums<br/>
                </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhiskeyLullabies