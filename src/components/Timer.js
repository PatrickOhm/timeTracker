import React from 'react';
import TimerStartBtn from './TimerStartBtn';
import trashIcon from '../icons/delete-icon.svg';
import editIcon from '../icons/edit-icon.svg';
import helpers from '../helpers.js';


class Timer extends React.Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleDelete = () => {
        this.props.onDeleteClick(this.props.id);
    }

    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return (
            <div className='timer'>
                <div className='centered-card'>
                    <div className='header'>{this.props.title}</div>
                    <div className='meta'>{this.props.project}</div>
                    <div className='timer-display'>{elapsedString}</div>
                    <div className='icons'>
                        <img
                            className='icon icon-edit'
                            src={editIcon}
                            onClick={this.props.onFormOpen}
                        />
                        <img
                            className='icon icon-delete'
                            src={trashIcon}
                            onClick={this.handleDelete}
                        />
                    </div>
                    <TimerStartBtn
                        timerIsRunning={!!this.props.runningSince}
                        onStopClick={this.handleStopClick}
                        onStartClick={this.handleStartClick}
                    />
                </div>
            </div>
        );
    }
}

export default Timer;