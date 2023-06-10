import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";

const NavbarComp = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Logo color="#D7CDDB" />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComp;
