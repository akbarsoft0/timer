// App.js
import React, { useState, useEffect } from 'react';
import TimerSection from './TimerSection';
import TasksSection from './TasksSection';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [timerState, setTimerState] = useState('stopped');
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (timerState === 'started') {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerState]);

    const handleStart = () => {
        setTimerState('started');
    };

    const handlePause = () => {
        setTimerState('paused');
    };

    const handleSave = () => {
        setTimerState('stopped');
        setTasks((prevTasks) => [
            ...prevTasks,
            { title: 'Task', description: '', time: timer },
        ]);
        setTimer(0);
    };

    return (
        <div className="container">
            <TimerSection
                timer={timer}
                onStart={handleStart}
                onPause={handlePause}
                onSave={handleSave}
                timerState={timerState}
            />
            <TasksSection tasks={tasks} />
        </div>
    );
};

export default Home;
