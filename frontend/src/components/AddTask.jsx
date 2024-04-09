import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
    const [task, setTask] = useState({
        name: '',
        duration: '',
        frequency: '',
        category: '',
        preferredDays: '',
        preferredTimes: ''
    });
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // Validate the form fields
            if (!task.name || !task.duration || !task.category) {
                setErrorMessage('Please fill in all required fields.');
                return;
            }

            // Send the task data to the backend
            await axios.post('http://localhost:7000/task/create', task);
            // Reset the form fields
            setTask({
                name: '',
                duration: '',
                frequency: '',
                category: '',
                preferredDays: '',
                preferredTimes: ''
            });
            setShowAlert(true);
            setErrorMessage('');
        } catch (error) {
            console.error(error);
            setErrorMessage('Error adding task');
        }
    };

    return (
        <div className="container" style={{ marginLeft: '300px' }}>
            <h2>Add Task</h2>

            <div className='card' style={{ padding: '20px', width: '30%', background: 'var(--bs-primary-bg-subtle)' }}>
                <div className='body'>
                    <form onSubmit={handleSubmit} className="needs-validation">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={task.name} onChange={handleChange} placeholder="Enter task name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Duration (in hours)</label>
                            <input type="number" className="form-control" id="duration" name="duration" value={task.duration} onChange={handleChange} placeholder="Enter duration" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="frequency" className="form-label">Frequency</label>
                            <input type="text" className="form-control" id="frequency" name="frequency" value={task.frequency} onChange={handleChange} placeholder="Enter frequency" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" name="category" value={task.category} onChange={handleChange} placeholder="(professional/personal/rest)" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="preferredDays" className="form-label">Preferred Days</label>
                            <input type="text" className="form-control" id="preferredDays" name="preferredDays" value={task.preferredDays} onChange={handleChange} placeholder="Enter preferred days" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="preferredTimes" className="form-label">Preferred Times</label>
                            <input type="text" className="form-control" id="preferredTimes" name="preferredTimes" value={task.preferredTimes} onChange={handleChange} placeholder="Enter preferred times" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </form>
                </div>
            </div>
            {showAlert && <div className="row">
                <div className="col-md-3 mt-4">
                    <div className="alert alert-success" role="alert">
                        Task Created Successfully!
                    </div>
                </div>
            </div>}
            {errorMessage && <div className="row">
                <div className="col-md-3 mt-4">
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default AddTask;
