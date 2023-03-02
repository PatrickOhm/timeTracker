import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
    state = {
        editFormOpen: false,
    };

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ editFormOpen: false });
    }

    handleFormClose = () => {
        this.setState({ editFormOpen: false });
    }

    handleFormOpen = () => {
        this.setState({ editFormOpen: true });
    }


    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onStopClick={this.props.onStopClick}
                    onStartClick={this.props.onStartClick}
                    onDeleteClick={this.props.onDeleteClick}
                    onFormOpen={this.handleFormOpen}
                />
            );
        }
    }
}

export default EditableTimer;