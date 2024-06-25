import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import MainNavbar from "./shared-components/Navbar";
import {Container} from "react-bootstrap";
import BirthdayMystery from "./pages/birthday-mystery/BirthdayMystery";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className={"wrapping-container"}>
      <Container>
        <BirthdayMystery />

      </Container>
      </div>
    </div>
  );
}

export default App;
