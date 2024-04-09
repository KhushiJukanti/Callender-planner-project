import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [totalDuration, setTotalDuration] = useState(0);
    const maxDuration = 672;

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:7000/task/all');
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTasks();
    }, []);
    const categoryBoxShadowColors = {
        professional: '0 0 10px blue',
        personal: '0 0 10px green',
        rest: '0 0 10px yellow'
    };

    const calculateTotalDuration = (tasks) => {
        const total = tasks.reduce((acc, task) => acc + task.duration, 0);
        setTotalDuration(total);
    };

    const remainingHours = maxDuration - totalDuration;

    return (
        // { filteredTasks.length === 0 && <h4 className='mt-4' >Currently No Task Available</h4> }
        <div className='container'>
            < div className='row' >
                {
                    tasks.map((task) => {
                        // Get the background color based on the task's category
                        const boxShadow = categoryBoxShadowColors[task.category];

                        return (


                            <div className='col-md-3'>
                                <div className="card mt-4 task-card" style={{ boxShadow: boxShadow }}>
                                    {/* {task.status === 'Inprogress' && <button style={{ position: 'absolute' }} className='btn btn-info btn-sm' onClick={(e) => startTask(e, task._id, task.status)}>{'Complete'}</button>}
                                {task.status === 'not_started' && <button style={{ position: 'absolute' }} className='btn btn-info btn-sm' onClick={(e) => assignTask(e, task._id, task.status)}>{'Start'}</button>} */}
                                    <img className="card-img-top" src="https://ionicframework.com/docs/img/demos/card-media.png" alt="logo" />
                                    <div className="card-body">
                                        <h5 className="card-title">{task.name}</h5>
                                        <p className="card-text">Duration: {task.duration} hours</p>
                                        <p className="card-text">{task.frequancy}</p>
                                        <p className="card-text">category: {task.category}</p>
                                        <p className="card-text">Days: {task.preferredDays} <span style={{ marginLeft: '30px' }}>Time: {task.preferredTimes}</span></p>
                                        <p>Total Allocated Hours: {totalDuration} hours</p>
                                        <p>Remaining Hours: {remainingHours} hours</p>

                                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span class="badge bg-success">{task.status}</span>
                                        <span class="badge bg-danger" onClick={(e) => deleteTask(e, task._id)}>delete</span>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div>

    )


}

export default TaskList;
