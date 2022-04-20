import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
  import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
  import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";

  
  function App() {
    return (
  <Router>
    <Navbar />
  <Routes>  
 <Route path="/profile" element={<Profile />} />
 <Route path="/newblog" element={<NewBlog />} />
 <Route path="/dashboard" element={<Dashboard /> } />
  </Routes>
  </Router>
    );
  }
  
  export default App;
  