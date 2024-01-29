import { Container, Navbar } from "react-bootstrap";
import "./Navbar.css";
const Navigation = () => {
  return (
    <Navbar variant="dark" className="mb-4 nav " bg="dark">
      <Container>
        <Navbar.Brand>York British Academy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Student Certificate</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
