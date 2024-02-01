import React from "react";

class AddJobComponent extends React.Component<any> {
    state = {
        titleJob: '',
        salary: '',
    }

    handleTitleJob = (e:any) => {
       this.setState({
           titleJob: e.target.value,
       })
    }

    handleSalary = (e:any) => {
        this.setState({
            salary : e.target.value,
        })
    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        if (!this.state.titleJob ) {
            alert('vui long nhap TitleJob. ');
            return;
        } else if (!this.state.salary) {
            alert('vui long nhap Salary. ');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            titleJob: this.state.titleJob,
            salary: this.state.salary,
        });

        this.setState({
            titleJob: '',
            salary: '',
        })

    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title Job: </label><br/>
                    <input
                        onChange={(event) => this.handleTitleJob(event)}
                        type="text"
                        value={this.state.titleJob}/>
                    <br/>
                    <label htmlFor="lname">Salary: </label><br/>
                    <input onChange={(event) => this.handleSalary(event)}
                           type="text"
                           value={this.state.salary} /><br/><br/>
                    <input
                        onClick={(event) => this.handleSubmit(event)}
                        type="submit" value="Submit"
                    />
                </form>
            </>
        );
    }
}

export default AddJobComponent;