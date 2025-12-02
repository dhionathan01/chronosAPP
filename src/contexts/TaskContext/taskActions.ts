import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionsTypeWithPayload = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsTypesWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    };

export type TaskActionModel =
  | TaskActionsTypeWithPayload
  | TaskActionsTypesWithoutPayload;
