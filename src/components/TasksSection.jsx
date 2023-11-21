// TasksSection.js
import React from 'react';
import Task from './Task';

const TasksSection = ({ tasks }) => {
    return (
        <div className="tasks-section">
            <h2>Saved Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TasksSection;
