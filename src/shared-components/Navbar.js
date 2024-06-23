import {Container, Nav, Navbar} from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
