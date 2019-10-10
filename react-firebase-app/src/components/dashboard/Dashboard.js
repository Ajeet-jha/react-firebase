import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectLists'

class Dashboard extends Component {
    render() {
        return (
            <div className= "container dashboard">
                <div className= "row">
                    <div className= "col s12 m6">
                        <ProjectLists />
                    </div>
                    <div className= "col s12 m6">
                        <div className= "col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Dashboard;