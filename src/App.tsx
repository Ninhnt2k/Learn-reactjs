import React from 'react';
import './App.css';
import ListTodo from "./components/ListTodo/ListTodo";
import logo from './logo.svg';

const App = () => {

  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <p>Hello world with React.JS</p>

            <ListTodo/>

        </header>
    </div>
  );
}

export default App;
