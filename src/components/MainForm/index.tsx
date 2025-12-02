import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatedSecondsRemainingToMinutes } from '../../utils/formatedSecondsRemainingToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
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

    const secondsRemaining = newTask.duration * 60;
    const formatedSecondsRemaining =
      formatedSecondsRemainingToMinutes(secondsRemaining);
    setState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining,
        config: { ...prevState.config },
      };
    });
  }

  function handleInterruptingTask() {
    setState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
      };
    });
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
