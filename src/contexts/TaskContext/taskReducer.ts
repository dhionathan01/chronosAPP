import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionsTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK:
      return state;
    case TaskActionsTypes.INTERRUPT_TASK:
      return state;
    case TaskActionsTypes.RESET_STATE:
      return state;
  }

  // Um reducer sempre deve retornar um estado, seja o estado atual ou um modificado(atualizado).
  return state;
}
