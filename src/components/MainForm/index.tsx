import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleClickSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    console.log(taskNameInput.current);
    console.log(taskNameInput.current.value);
    event.preventDefault();
    if (!taskNameInput.current) return;
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      console.log('entri no !taskname');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'worktime',
    };
    setState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        activeTask: newTask,
        currentCycle: 1,
      };
    });
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
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton color='green' icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
