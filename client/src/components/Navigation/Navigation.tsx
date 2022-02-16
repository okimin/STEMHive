import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBell,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  const userDropdown = <FontAwesomeIcon icon={faUser} size="lg" />;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">STEMHive</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/saved">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-danger"
                size="lg"
              />
            </Nav.Link>
            <Nav.Link href="/notifications">
              <FontAwesomeIcon
                icon={faBell}
                className="text-warning"
                size="lg"
              />
            </Nav.Link>
            <Nav.Link href="/store">
              <FontAwesomeIcon
                icon={faShop}
                className="text-success"
                size="lg"
              />
            </Nav.Link>
            <NavDropdown title={userDropdown} align="end">
              <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
