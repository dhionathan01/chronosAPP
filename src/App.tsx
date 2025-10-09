import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <section>Logo</section>
      </Container>

      <div className='container'>
        <div className='content'>
          <section>Menu</section>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section>Form</section>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section>Footer</section>
        </div>
      </div>
    </>
  );
}
