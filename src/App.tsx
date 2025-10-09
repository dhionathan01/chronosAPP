import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
export function App() {
  return (
    <>
      <Heading
        attr={123}
        attr2={'String teste'}
        style={{ 'border-radius': '10px', padding: '10px' }}
      >
        Dhionathan Jobim
      </Heading>
      <h1>Hello World</h1>
      <h1>Olá Mundo</h1>
      <p>Dhionathan Jobim</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, veniam
        mollitia eaque beatae accusamus itaque? Doloremque provident dolores
        commodi facere incidunt consectetur enim nam, consequatur accusantium?
        Vel adipisci sapiente quidem!
      </p>
    </>
  );
}
