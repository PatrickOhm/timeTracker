import React from 'react';
import EditableTimer from './EditableTimer';


class EditableTimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => {
            return <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onStopClick={this.props.onStopClick}
                onStartClick={this.props.onStartClick}
                onFormSubmit={this.props.onFormSubmit}
                onDeleteClick={this.props.onDeleteClick}
            />;
        });

        return (
            <div id='timers'>
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;