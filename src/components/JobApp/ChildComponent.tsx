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
                                                {item.titleJob} - {item.salary}
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