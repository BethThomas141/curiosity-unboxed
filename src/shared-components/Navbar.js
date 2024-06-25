import {Container, Nav, Image,Navbar} from "react-bootstrap";
import logo from './CuriosityUnboxedLogo.png'

function MainNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home"> <Image
          className="d-flex"
          src={logo}
          style={{height: '4em'

          }}
        /> </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
