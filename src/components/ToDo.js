import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

// Component function.
function ToDo ()
{

    
    const [newTask, setNewTask] = useState( 'default' ); 

    

  // We use "return" for our render, in a component.
  return (
    <>
      <form>
        <label htmlFor="task">New Task:</label>
        <input 
        type="text" 
        id="task"
        onChange = { e => { setNewTask( e.target.value)}}
        value={newTask} />
        <p>
            <strong> Current Task value: </strong>
            <em>{newTask}</em>
        </p>
        <input type="submit" value="Add To-Do" />
      </form>
      <ul></ul>
    </>
  );
}

export default ToDo;