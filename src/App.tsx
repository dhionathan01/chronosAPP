import { Container, Logo, Menu } from './components';
import './styles/theme.css';
import './styles/global.css';

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
        <section>Form</section>
      </Container>
      <Container>
        <section>Footer</section>
      </Container>
    </>
  );
}
