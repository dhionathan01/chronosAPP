import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatedSecondsRemainingToMinutes } from '../../utils/formatedSecondsRemainingToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionsTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;
      const formatedSecondsRemaining =
        formatedSecondsRemainingToMinutes(secondsRemaining);
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining,
      };
    }
    case TaskActionsTypes.INTERRUPT_TASK:
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (task.id === state.activeTask?.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    case TaskActionsTypes.RESET_STATE:
      return state;
  }

  // Um reducer sempre deve retornar um estado, seja o estado atual ou um modificado(atualizado).
  return state;
}
