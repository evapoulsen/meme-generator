import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Meme from './Components/Meme';

function App() {
  return (
    <Container>
      <Header />
      <Meme />
    </Container>
    );
}

export default App;
