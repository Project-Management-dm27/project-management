import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.css';
import NewMenu from '../new-menu/new-menu';
import axios from 'axios';
import Table2 from '../analytics/table2';
import FirstTimeUser from '../first-time-user/FirstTimeUser';
import { addProjectUniqueKey, getUserTasks } from '../../redux/reducers/main-reducer';
import  {Link} from 'react-router-dom';
import _ from 'underscore-node';

let styles = {

    icon: {
        position: 'absolute',
        left: 0,
        top: 5,
        transform: 'translateX(-13.5vw)'
    }
}

class Dashboard extends Component {
    constructor() {
        super()
        
        this.state = {
            newMenu: false,
            missingEmployeeInfo: false,
        }
    }

    displayNewMenu() {
        this.setState({
            newMenu: !this.state.newMenu
        })
    }

    markTaskAsCompleted( taskId, taskNumber, taskKey ) {
        console.log( 'button hit' )

        taskNumber++

        axios.put( `/api/completeTask/${taskId}/${taskNumber}/${taskKey}` )
            .then( () => this.props.getUserTasks( this.props.user.user_id ) )
    }

    render() {

        let sortedTasks = _.sortBy( this.props.user_tasks, sorted => sorted )

        let taskMapper = sortedTasks.map( ( task, i ) => {
            return (
                task.task_show && !task.task_completed ?
                    <section className='dash-task' key={i} >
                        <div className='dash-task-title' >
                            {task.task_name}
                            <div className='dash-check' onClick={() => this.markTaskAsCompleted(task.task_id * 1, task.task_number, task.task_unique_key)} >&#10003;</div>
                        </div>
                        <div className='dash-task-details' >
                            <div>{task.task_start_date}</div>
                            <div>{task.task_finished_date}</div>
                            <div>{task.task_description}</div>
                            <div>{task.task_link}</div>
                        </div>
                    </section>
                : null
            )
        } )

        return (
            // userInfo ? 
            (
                <div className="dashboard-view">
                    <div className="button-span">


{/* GOING TO PUP UP IF USER DOES NOT HAVE FIRST NAME WORKING */}
                        <div>
                            <div>Update Personal Information</div>
                                <div>
                                    <input placeholder='First Name' />
                                </div>
                                <div>
                                <input placeholder='First Name' />
                                </div>
                                <button>Save</button>
                        </div>
{/* GOING TO PUP UP IF USER DOES NOT HAVE FIRST NAME WORKING */}

                        <button className='dashboard_new_items_buttons' onClick={() => { this.displayNewMenu() }}>+ New</button>
                    </div>
                    {this.state.newMenu === true ?
                        <div className='dashboard_new_menu_container'>
                            <a href='/#/create-project'>
                                <div className='dashboard_menu_item_selection' onClick={() => { this.props.addProjectUniqueKey(this.props.company[0].company_name, this.props.user.user_id) }}>Project</div></a>


                            <div className='dashboard_menu_item_selection'>Team</div>
                            <div className='dashboard_menu_item_selection'>User</div>
                        </div>
                        : null}
                    <div className="content-wrapper">
                        <div className="task-list">
                            <div className='dashboard-titles'>Tasks</div>
                            <div className='dashboard-task-container'>
                                <div className='dashboard-tasks' >
                                    {taskMapper}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="current-stats-wrapper">
                        <div className='dashboard-titles'>Analytics</div>
                        <div>
                            <Table2 />
                        </div>
                    </div>
                    <div >
                    <Link className="chat" to="/chat">Chat</Link>
                </div>
                </div>
            )

        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { addProjectUniqueKey, getUserTasks })(Dashboard)
