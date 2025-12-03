import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const tipsWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime} minutos</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime} minutos</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime} minutos</b>
      </span>
    ),
  };
  const tipsWhenNotActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}</b> minutos
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é descanso por{' '}
        <b>{state.config.shortBreakTime} minutos</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo é descanso por <b>{state.config.longBreakTime} minutos</b>
      </span>
    ),
  };
  return (
    <>
      <p>{!!state.activeTask && tipsWhenActiveTask[state.activeTask.type]}</p>
      <p>{!state.activeTask && tipsWhenNotActiveTask[nextCycleType]}</p>
    </>
  );
}
