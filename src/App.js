import "./App.css";
import Home from "./pages/home/Home";
import MainNavbar from "./shared-components/Navbar";
import { Container } from "react-bootstrap";
import BirthdayMystery from "./pages/birthday-mystery/BirthdayMystery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <div className={"wrapping-container"}>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/mystery-birthday-card/unlock"
                element={<BirthdayMystery />}
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
