import React from 'react';

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    };

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        });
    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='timer-edit'>
                <div className='centered-card editable-timer'>
                    <label htmlFor='title'>Title</label>
                    <input
                        className='timer-edit-input'
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })}
                    />
                    <label htmlFor='project'>Project</label>
                    <input
                        className='timer-edit-input'
                        type='text'
                        name='project'
                        value={this.state.project}
                        onChange={(e) => this.setState({ project: e.target.value })}
                    />
                    <div className='update-cancel-btn' >
                        <div
                            className='update update-cancel btn'
                            onClick={this.handleSubmit}
                        >{submitText}</div>
                        <div
                            className='cancel update-cancel btn'
                            onClick={this.props.onFormClose}
                        >Cancel</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;