import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
    state = { isOpen: false };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    }

    handleFormClose = () => {
        this.setState({ isOpen: false });
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    }

    render() {
        if (!this.state.isOpen) {
            return (
                <div
                    className='create-new-btn'
                    onClick={this.handleFormOpen}
                >
                    <div id='horizontal'></div>
                    <div id='vertical'></div>
                </div>
            );
        } else {
            return (
                <TimerForm
                    onFormClose={this.handleFormClose}
                    onFormSubmit={this.handleSubmit}
                />
            );
        }
    }
}

export default ToggleableTimerForm;