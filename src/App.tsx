import './styles/theme.css';
import './styles/global.css';
import { Container, Logo, Menu, Contador } from './components';
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
              type='number'
              labelText='Task'
              title='Input Text Title'
              PropLabel={{
                height: 30,
                ['font-weight']: 'bold',
                color: 'cyan',
                ['background-color']: ' gray',
              }}
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
