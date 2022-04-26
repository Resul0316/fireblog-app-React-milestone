import './App.css';
import AppRouter from "../src/app-router/AppRouter";
import { AuthContextProvider } from './contexts/AuthContext';
import {useState} from "react";
import NewBlog from './pages/NewBlog';


const initialValues ={title:"", url:"", text:""}


function App() {
  const [blog, setBlog] = useState(initialValues)

  return (
    <div className="App">
{/*       <AuthContextProvider >
      <AppRouter />
      </AuthContextProvider> */}
      <NewBlog blog={blog} setBlog={setBlog} />
      

    </div>
  );
}

export default App;
