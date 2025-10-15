import './styles/theme.css';
import './styles/global.css';
import { Container, Logo, Menu, Contador } from './components';

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
    </>
  );
}
