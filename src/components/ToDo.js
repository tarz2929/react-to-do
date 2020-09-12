import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

// Component function.
function ToDo ()
{

    /*
    // Assignment deconstructor (Array.)
    const [num1, num2] = [1, 2];
    console.log( num1 );
    console.log( num2 );
  */

  /**
   * Set up for state.
   * First item is a variable that holds the state value.
   * Second item is a function that we use to update the state value.
   * !!! IMPORTANT: We never update the first item DIRECTLY EVER.
   */

    
    const [newTask, setNewTask] = useState( 'default' ); // Argument in "useState()" is the default value for this state.

    // Set up state for our to-do list items.
    const[toDos, setToDos] = useState( [ //Default list of to-dos
        { task: "Buy Apples"},
        {task: "Learn React"},
        {task: "Revise in class concepts"}

        //Turn the array into a map with key-valuer pairs, easy to outpt JSX this way.
   ]     );

// Function we can use for our "onSubmit" form event.
const addNewTask = event => {
    // Don't let the page reload for the submission! Let's prevent that default action.
    event.preventDefault();
    // TODO: Add new task to list; output in render.


}



    

  // We use "return" for our render, in a component.
  return (
    <>

      <form onSubmit={addNewTask}>
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
  <ul>{toDos.map( ( toDo, index ) => <li key={index}>{toDo.task}</li> )}</ul>
    </>
  );
}

export default ToDo;