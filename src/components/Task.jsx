// Task.js
import React from 'react';

const Task = ({ task }) => {
    return (
        <li>
            <strong contentEditable>{task.title}</strong> - {formatTime(task.time)}
        </li>
    );
};

const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default Task;
