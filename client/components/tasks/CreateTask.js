import React, { useState, useContext } from 'react';
import { GlobalStore } from '../../context/context';
import { ACTIONS } from '../../context/actions';

const CreateTask = () => {
    const [taskName, setTaskName] = useState('');
    const { dispatch } = useContext(GlobalStore);

    const onTaskNameChange = ({ value }) => {
        setTaskName(value);
    };

    const onTaskSubmitHandler = (e) => {
        dispatch({ type: ACTIONS.ADD_POST, payload: { name: taskName } });
        e.preventDefault();
    };
    return (
        <div>
            <form action='submit' onSubmit={onTaskSubmitHandler}>
                <h1>Create Task</h1>
                <input
                    type='text'
                    onChange={({ target }) => onTaskNameChange(target)}
                    value={taskName}
                />
                <button type='submit'>Create Task</button>
            </form>
            <h3>Here is task name {taskName}</h3>
        </div>
    );
};

export default CreateTask;
