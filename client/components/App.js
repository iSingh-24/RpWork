import React, { useContext } from 'react';
import TaskList from './tasks/TaskList';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { GlobalStore } from '../context/context';
import CreateTask from './tasks/CreateTask';

export const App = () => {
    const { state } = useContext(GlobalStore);

    console.log(state.tasks, 'here are store values');
    return (
        <div>
            <h1>React Application</h1>
            <HashRouter>
                <Link to='/'>Home Page</Link>
                <br />
                <Link to='/task/create'>Create Task</Link>
                <br />
                <Link to='/tasklist'>All Tasks</Link>
                <Routes>
                    <Route element={<TaskList />} exact path='/tasks' />
                    <Route element={<CreateTask />} exact path='/task/create' />
                    <Route element={<TaskList />} exact path='/tasklist' />
                </Routes>
            </HashRouter>
        </div>
    );
};
