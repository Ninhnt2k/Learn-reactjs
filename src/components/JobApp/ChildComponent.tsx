import React from "react";

class ChildComponent extends React.Component<any, any> {
    state = {
        showJob: false,
    }

    handleHidden = () => {
        this.setState({
            showJob: !this.state.showJob,
        })
    }

    handleOnClickDelete = (job:any) => {
        alert('vui long xoa')
        this.props.deleteJobs(job);
    }

    render() {
        const {arrJobs} = this.props;
        let {showJob} = this.state;
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleHidden()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job'>
                            {
                                arrJobs.map((item: any) => {
                                    return (
                                        <div key={item.id}>
                                            <span>
                                                {item.titleJob} - {item.salary}  <></> <span onClick={() => this.handleOnClickDelete(item)} >x</span>
                                            </span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleHidden()}>Hidden</button>
                        </div>
                    </>
                }
            </>

        );
    }
}

export default ChildComponent;