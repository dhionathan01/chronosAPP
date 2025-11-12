import './styles/theme.css';
import './styles/global.css';
import { Container, Logo, Menu, Contador, Cycles } from './components';
import { DefaultInput } from './components/DefaultInput';

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
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id={'taskInput'}
              type='text'
              labelText='Task'
              placeholder='Digite o nome da task...'
              title='Input Text Title'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
