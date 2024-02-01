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
        //cach1
        // this.setState( (pre:any) =>{
        //     return {...pre, arrJobs:[...pre.arrJobs, job]}
        // })

        //cach2
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);

        this.setState({
            arrJobs: [...this.state.arrJobs, job],
            // arrJobs: currentJobs,
        })
    }

    deleteJob = (job:any) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        })
    }

    render() {

        return (
            <div>
                <AddJobComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob}/>
            </div>
        );
    }
}

export default ListJobComponent;