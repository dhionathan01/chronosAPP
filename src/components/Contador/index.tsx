import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';
export function Contador() {
  const { state, setState } = useTaskContext();
  function handleClickAlterTime() {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: '21:00',
      };
    });
  }

  return (
    <div>
      <button onClick={handleClickAlterTime}>click</button>
      <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    </div>
  );
}
