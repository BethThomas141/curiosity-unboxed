import { Button, Container, Image, Navbar } from "react-bootstrap";
import logo from "./CuriosityUnboxedLogo.png";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <Image
            className="d-flex"
            src={logo}
            style={{ height: "4em" }}
            onClick={() => navigate("/")}
          />{" "}
        </Navbar.Brand>
        <Navbar.Text className="justify-content-end">
          <Button
            className={
              "outline-button d-flex justify-content-center align-items-center "
            }
            target={"_blank"}
            href="https://www.etsy.com/shop/CuriosityUnboxed"
            variant="outline-info"
          >
            View Etsy store <BoxArrowUpRight style={{ marginLeft: "8px" }} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
