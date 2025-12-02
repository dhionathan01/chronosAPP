import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleClickSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current) return;
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Tarefa precisa de um nome válido!');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
  }

  function handleInterruptingTask() {
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
    console.log(state.tasks);
  }
  return (
    <form className='form' action='' onSubmit={handleClickSubmitForm}>
      <div className='formRow'>
        <DefaultInput
          id={'taskInput'}
          type='text'
          labelText='Task'
          placeholder='Digite o nome da task...'
          title='Input Text Title'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar tarefa atual.'
            title='Iniciar tarefa atual.'
            color='green'
            type='submit'
            key={'sendFormButton'}
            icon={<PlayCircleIcon />}
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper tarefa atual.'
            title='Interromper tarefa atual.'
            color='red'
            type='button'
            key={'stopTaskButton'}
            onClick={handleInterruptingTask}
            icon={<StopCircleIcon />}
          />
        )}
      </div>
    </form>
  );
}
