import "./App.css";
import Home from "./pages/home/Home";
import MainNavbar from "./shared-components/Navbar";
import { Container } from "react-bootstrap";
import BirthdayMystery from "./pages/birthday-mystery/BirthdayMystery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavbar />
        <div className={"wrapping-container"}>
          <Container>
            <Routes>
              <Route
                path="/mystery-birthday-card/unlock"
                element={<BirthdayMystery />}
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
