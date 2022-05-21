import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Events",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/events",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  // cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  // cartIconColorHover: "#eb4034",
  // cartIconMargin: "1vmax",
};

const Header = () => {
  // return <ReactNavbar {...options} />;

  return(

    <>
    <Navbar style={{height:"75px",background:"linear-gradient(to right, grey , lightblue)"}}  fixed="top" variant="dark">
      <Container style={{marginLeft:"15px"}}>
      <Link to="/">
        <img src={logo} alt="Ecommerce"  style={{height:'155px'}}/>
      </Link>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav className="me-auto" style={{margin:"auto"}} >
      <Nav.Link href="/community">Go To Community</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  </>

  );

};

export default Header;
