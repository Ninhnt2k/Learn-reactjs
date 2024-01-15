import React from 'react';
import AddJobComponent from "./AddJobComponent";
import ChildComponent from "./ChildComponent";

class ListJobComponent extends React.Component {
    state = {
        arrJobs : [
            {id: 1, titleJob: 'Developer', salary: 500},
            {id: 2, titleJob: 'Tester', salary: 400},
            {id: 3, titleJob: 'PM', salary: 1000},
        ]
    }

    addNewJob = (job:any) => {
        // this.setState( (pre:any) =>{
        //     return {...pre, arrJobs:[...pre.arrJobs, job]}
        // })

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {

        return (
            <div>
                <AddJobComponent addNewJob={this.addNewJob}/>
                <ChildComponent arrJobs={this.state.arrJobs}/>
            </div>
        );
    }
}

export default ListJobComponent;