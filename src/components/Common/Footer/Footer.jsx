import React, { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
  const [visible, setVisible]=useState(false);

  const toggleVisible=()=>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300){
      setVisible(true)
    }
   else if(scrolled  <= 300){
      setVisible(false)
    }
  }

  const scrollTop =()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  if(typeof window !== "undefined"){
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
    <footer className="pt-5">
      <Container>
        <Row>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
            <h4 className="mt-lg-0 mt-sm-3">Company </h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">News</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">Faq</NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Explore </h4>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/"> Faq</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">Tour Listings</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/"> Destination</NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Quick Link </h4>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/"> Home</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">About Us </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/"> Contact Us </NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>

          <div className="d-flex align-items-center">
            <p className="pb-2"> Greater Noida, UttarPradesh, India</p>
          </div>

          <div className="d-flex align-items-top my-2">
          <i className="bi bi-geo-alt me-3"></i>
          <a target="_blank" href="mailto:baaztechno@gmail.com" className="d-block" rel="noreferrer" >baaztechno@gmail.com</a>
          </div>
          <div className="d-flex align-items-top ">
          <i className="bi bi-telephone me-3"></i>
          <a target="_blank" href="tel:9548551920" className="d-block" rel="noreferrer" >9548551920</a>
          </div>
         
          </Col>
        </Row>
        <Row className="py-2 bdr mt-3">
        <Col className="col copyright">
        <p className="text-light">   @ 2024. baaztechno All rights reserved </p> 
        </Col>
        </Row>

      </Container>
    </footer>

    <div id="back-top"
    onClick={scrollTop}
     className={visible ? "active" : ""}>
    <i className="bi bi-arrow-up"></i>

    </div>
    </>
  );
};

export default Footer;
