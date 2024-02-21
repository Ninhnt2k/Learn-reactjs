import React from 'react';
import './App.css';
import ListTodo from "./components/ListTodo/ListTodo";
import logo from './logo.svg';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./components/Nav/Nav";
import IndexComponent from "./components/JobApp/IndexComponent";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home";

const App = () => {

    return (
        <React.StrictMode>
            <BrowserRouter basename={'/'}>
                <div className="App">
                    <header className="App-header">
                        <Nav/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Switch>
                            <Route path="/" exact><Home/></Route>
                            <Route path="/todo"><ListTodo/></Route>
                            <Route path="/about"><IndexComponent/></Route>
                        </Switch>
                    </header>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer/>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
