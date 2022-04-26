import './App.css';
import AppRouter from "../src/app-router/AppRouter";
import { AuthContextProvider } from './contexts/AuthContext';
import {useState} from "react";
import NewBlog from './pages/NewBlog';
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <div className="App">
    
      <AppRouter />
      {/* <Dashboard />   */}
       

    </div>
  );
}

export default App;
