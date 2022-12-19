import React from 'react';

class TimerStartBtn extends React.Component {
    render() {
        if (this.props.timerIsRunning) {
            return (
                <div
                    className='start-btn btn'
                    onClick={this.props.onStopClick}
                >
                    Stop
                </div>
            );
        } else {
            return (
                <div
                    className='start-btn btn'
                    onClick={this.props.onStartClick}
                >
                    Start</div>
            );
        }
    }
}

export default TimerStartBtn;