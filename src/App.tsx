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
    Routes
} from 'react-router-dom';
import Home from "./components/Home";
import ListUser from "./components/Users/ListUser";

const App = () => {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <Nav/>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/todo" element={<ListTodo/>} />
                            <Route path="/about" element={<IndexComponent/>} />
                            <Route path="/user" element={<ListUser/>} />
                        </Routes>
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
