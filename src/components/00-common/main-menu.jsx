import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <Card
      className="overflow-auto position-sticky top-0"
      style={{ height: "80vh" }}
    >
      <Card.Body>
        <Nav className="flex-row flex-md-column ">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/hello">
            Hello
          </Nav.Link>
          <Nav.Link as={Link} to="/hello-js">
            Hello JS
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx1">
            JSX1
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx2">
            JSX2
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx3">
            JSX3
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx4">
            JSX4
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx5">
            JSX5
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx6">
            JSX6
          </Nav.Link>
          <Nav.Link as={Link} to="/jsx7">
            JSX7
          </Nav.Link>
          <Nav.Link as={Link} to="/style1">
            Style1
          </Nav.Link>
          <Nav.Link as={Link} to="/style2">
            Style2
          </Nav.Link>
          <Nav.Link as={Link} to="/style3">
            Style3
          </Nav.Link>
          <Nav.Link as={Link} to="/style4">
            Style4
          </Nav.Link>
          <Nav.Link as={Link} to="/style5">
            Style5
          </Nav.Link>
          <Nav.Link as={Link} to="/clock1">
            Clock1
          </Nav.Link>
          <Nav.Link as={Link} to="/greetings">
            Greetings
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/clock2">
            Clock2
          </Nav.Link>
          <Nav.Link as={Link} to="/image">
            Image
          </Nav.Link>
          <Nav.Link as={Link} to="/image-gallery">
            Image Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/profile-card">
            Profile Card
          </Nav.Link>
          <Nav.Link as={Link} to="/bootstrap-static">
            Bootstrap Static
          </Nav.Link>
          <Nav.Link as={Link} to="/bootstrap-dynamic">
            Bootstrap Dynamic
          </Nav.Link>
          <Nav.Link as={Link} to="/event1">
            Event1
          </Nav.Link>
          <Nav.Link as={Link} to="/event2">
            Event2
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            Shop
          </Nav.Link>
          <Nav.Link as={Link} to="/stateless">
            Stateless
          </Nav.Link>
          <Nav.Link as={Link} to="/state">
            State
          </Nav.Link>
          <Nav.Link as={Link} to="/counter1">
            Counter1
          </Nav.Link>
          <Nav.Link as={Link} to="/counter2">
            Counter2
          </Nav.Link>
          <Nav.Link as={Link} to="/userlist">
            UserList
          </Nav.Link>
          <Nav.Link as={Link} to="/useeffect1">
            UseEffect1
          </Nav.Link>
          <Nav.Link as={Link} to="/clock3">
            Clock3
          </Nav.Link>
          <Nav.Link as={Link} to="/useeffect3">
            UseEffect3
          </Nav.Link>
          <Nav.Link as={Link} to="/country-filter">
            Country Filter
          </Nav.Link>
          <Nav.Link as={Link} to="/useref">
            UseRef
          </Nav.Link>
          <Nav.Link as={Link} to="/class-comp">
            Class Comp
          </Nav.Link>
          <Nav.Link as={Link} to="/users">
            Users
          </Nav.Link>
          <Nav.Link as={Link} to="/users2">
            Users2
          </Nav.Link>
          <Nav.Link as={Link} to="/countries">
            Countries
          </Nav.Link>
          <Nav.Link as={Link} to="/parent">
            Parent
          </Nav.Link>
          <Nav.Link as={Link} to="/form1">
            Form1
          </Nav.Link>
          <Nav.Link as={Link} to="/form2">
            Form2
          </Nav.Link>
          <Nav.Link as={Link} to="/form3">
            Form3
          </Nav.Link>
          <Nav.Link as={Link} to="/form4">
            Form4
          </Nav.Link>
          <Nav.Link as={Link} to="/form5">
            Form5
          </Nav.Link>
          <Nav.Link as={Link} to="/form6">
            Form6
          </Nav.Link>
          <Nav.Link as={Link} to="/product-manager">
            Product Manager
          </Nav.Link>
          <Nav.Link as={Link} to="/routing">
            Routing
          </Nav.Link>
          <Nav.Link as={Link} to="/context-api">
            Context Api
          </Nav.Link>
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default MainMenu;
