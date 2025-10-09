import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <section>Menu</section>
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
