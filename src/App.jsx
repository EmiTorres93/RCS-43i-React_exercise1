import { Container } from "react-bootstrap";
import "./App.css";
import Titulo from "./components/Titulo";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <Titulo subtitulo="Subtítulo hecho con props"></Titulo>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
