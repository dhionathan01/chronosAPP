import { Contador, Container } from '../../components';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <Contador />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
