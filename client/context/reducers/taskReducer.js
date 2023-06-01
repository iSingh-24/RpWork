import { ACTIONS } from '../actions';

const taskReducer = (state, action) => {
    const taskMap = new Map();
    taskMap.set(ACTIONS.ADD_POST, {
        ...state,
        tasks: [...state.tasks, action.payload],
    });

    taskMap.set(ACTIONS.FETCH_POSTS, { ...state, tasks: [action.payload] });

    taskMap.set(ACTIONS.DELETE_POST, {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
    });

    return taskMap.has(action.type) ? taskMap.get(action.type) : state;
};

export default taskReducer;
