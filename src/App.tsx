import './styles/theme.css';
import './styles/global.css';
import { Container, Logo, Menu, Contador, Footer } from './components';
import { MainForm } from './components/MainForm';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Contador />
      </Container>
      <Container>
        <MainForm />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
