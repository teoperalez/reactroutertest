import React from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    
	
	<div class ="no-gutters header stickytop">
		<Container fluid>
      <Row>

		    <Col xs="2"><Link to="/" class="reactbutton"><span>Top </span></Link></Col>
			<Col xs="2"><Link to="/listen" class="col-xs-2 reactbutton"><span>Listen </span> </Link></Col>
			<Col xs="2"><Link to="/calendar" class="col-xs-2 reactbutton"><span>Calendar </span></Link></Col>
			<Col xs="2"><Link to="/photos" class="col-xs-2 reactbutton"><span>Photos </span></Link></Col>
			<Col xs="2"><Link to="/shop" class="col-xs-2 reactbutton"><span>Shop </span></Link></Col>
			<Col xs="2"><Link to="/contact" class="col-xs-2 reactbutton"><span>Contact </span></Link></Col>
                      
		    
	    </Row>
		</Container>
    </div>
    
  );
};

export default Navbar;