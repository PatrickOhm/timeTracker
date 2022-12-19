import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { v4 as uuidv4 } from 'uuid';
import helpers from '../helpers';

class App extends React.Component {
    state = {
        timers: []
    };

    componentDidMount() {
        const localStorageState = localStorage.getItem('timers');
        if (localStorageState) {
            this.setState(JSON.parse(localStorageState));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            localStorage.setItem('timers', JSON.stringify(this.state));
        }
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);

    }

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    }

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    }

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    });
                } else {
                    return timer;
                }
            })
        });
    }

    handleSubmit = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: [...this.state.timers, t],
        });
    }

    handleEditSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (attrs.id === timer.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        })
    }

    handleDelete = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });
    }

    render() {

        return (
            <div>
                <EditableTimerList
                    timers={this.state.timers}
                    onStopClick={this.handleStopClick}
                    onStartClick={this.handleStartClick}
                    onDeleteClick={this.handleDelete}
                    onFormSubmit={this.handleEditSubmit}
                />
                <ToggleableTimerForm
                    onFormSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default App;