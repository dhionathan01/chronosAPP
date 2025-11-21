import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';
export function Contador() {
  const { state } = useTaskContext();
  return (
    <div>
      <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    </div>
  );
}
