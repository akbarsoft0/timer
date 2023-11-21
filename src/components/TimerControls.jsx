// TimerControls.js
import React from 'react';

const TimerControls = ({ onStart, onPause, onSave, timerState }) => {
    return (
        <div className="timer-controls">
            <button onClick={onStart} disabled={timerState === 'started'}>
                Start
            </button>
            <button onClick={onPause} disabled={timerState !== 'started'}>
                Pause
            </button>
            <button onClick={onSave} disabled={timerState !== 'started' && timerState !== 'paused'}>
                Save
            </button>
        </div>
    );
};

export default TimerControls;
