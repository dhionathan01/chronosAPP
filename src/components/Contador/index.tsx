import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';
export function Contador() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  console.log(taskContext.state);
  console.log('Contador');
  return <div className={styles.container}>00:00</div>;
}
