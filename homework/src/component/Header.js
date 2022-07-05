import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container center text-center">
<Nav>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/About">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Cards">Cards</Nav.Link>
  </Nav.Item>
</Nav>
    </div>
  );
}

export default Header;
