import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInput = useRef(null);
  function handleClickSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    console.log(taskNameInput.current);
    console.log(taskNameInput.current.value);
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
