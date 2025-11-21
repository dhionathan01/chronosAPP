import { Home } from './pages/home';
import './styles/theme.css';
import './styles/global.css';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { TaskContext, TaskContextProvider } from './contexts/TaskContext';

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
