import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import  Home from "./components/Home";
import Notfound from './components/Notfound';
import { createContext, useReducer } from 'react';
import { initialstate,reducer } from './reducer/UseReducer';
export const userContext=createContext();
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate);
  return (
    <userContext.Provider value={{state,dispatch}}>
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element=<Home></Home>/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element=<Contact></Contact>/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="*" element={<Notfound></Notfound>}/>
      </Routes>
  
    </div>
    </userContext.Provider>
  );
}

export default App;
