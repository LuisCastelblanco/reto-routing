// NavBar.js
import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Adóptame</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
