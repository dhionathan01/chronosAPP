import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0, // 1 a 8
  config: {
    worktime: 25,
    shortWorkTime: 5,
    longWorkTime: 15,
  },
};
