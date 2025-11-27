import { useEffect } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';
export function Cycles() {
  const { state, setState } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  console.log(cycleStep);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {state.tasks &&
          state.tasks.map(item => {
            console.log(item);
            console.log(item['type']);
            return (
              <span
                className={`${styles.cycleDot} ${styles[item['type']]}`}
              ></span>
            );
          })}
      </div>
    </div>
  );
}
