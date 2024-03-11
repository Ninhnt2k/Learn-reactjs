import React from 'react';
import {connect} from "react-redux";
import {InitState} from "../store/reducers/rootReducer";

class Home extends React.Component<any, any> {
    render() {
        console.log('check props', this.props);
        return (
            <div>Hello world from home page with Neng IT 1111!</div>
        );
    }
}

const mapStateProps = (state: InitState) => {
   return {
       dataRedux: state.users
   }

}

export default connect(mapStateProps)(Home);
