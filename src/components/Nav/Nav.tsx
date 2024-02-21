import React from "react";
import './Nav.scss';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component<any> {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/todo">
                    Todos
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/user">
                    Users
                </NavLink>
            </div>
        )
    }
}

export default Nav;
