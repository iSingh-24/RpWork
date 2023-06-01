import React, { useContext } from 'react';
import { GlobalStore } from '../../context/context';
import CreateTask from './CreateTask';

const TaskList = () => {
    const { state } = useContext(GlobalStore);
    const { tasks } = state;

    console.log(tasks, 'here are tasks');

    const taskList = (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.name}</li>
            ))}
        </ul>
    );

    return (
        <div>
            {taskList}
            <br></br>
            <CreateTask />
        </div>
    );
};

export default TaskList;
