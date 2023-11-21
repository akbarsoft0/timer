// TimerSection.js
import React from 'react';
import Timer from './Timer';
import TimerControls from './TimerControls';

const TimerSection = ({ timer, onStart, onPause, onSave, timerState }) => {
    return (
        <div className="timer-section">
            <Timer time={timer} />
            <TimerControls
                onStart={onStart}
                onPause={onPause}
                onSave={onSave}
                timerState={timerState}
            />
        </div>
    );
};

export default TimerSection;
