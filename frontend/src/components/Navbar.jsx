import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand mt-2 bg-light">
                <div className='container-fluid'>
                    <Link className="navbar-brand" style={{ color: 'darkcyan', marginLeft: '100px' }}>TaskiFy Clender</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                            <Link class="nav-link active" to="/" style={{ color: 'darkcyan', marginLeft: '100px' }}>Calender</Link>
                        </li> */}
                            <li className='nav-item'>
                                <Link className='nav-link active' to="tasklist" style={{ color: 'darkcyan', marginLeft: '100px' }}>Task List</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to="addtask" style={{ color: 'darkcyan', marginLeft: '100px' }}>Add Task</Link>
                            </li>
                        </ul>


                        <div className="dropdown">
                            <button style={{ backgroundColor: '#fff', border: 'none' }} className="btn btn-secondary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item" to="/">Tasks</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Dates</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar
