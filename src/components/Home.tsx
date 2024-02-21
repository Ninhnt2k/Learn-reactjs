import React from 'react';
import {withRouter} from "react-router-dom";

class Home extends React.Component<any, any> {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo');
        }, 3000);
    }

    render() {
        return (
            <div>Hello world from home page with Neng IT 1111!</div>
        );
    }
}

export default withRouter(Home);
