import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
  import Navbar from "../components/Navbar";
  import Login from "../pages/Login";

  
  function App() {
    return (
  <Router>
    <Navbar />
  <Routes>
{/*     <Route path="/" element={<Login />} />
 */}    <Route />
    <Route />
  </Routes>
  </Router>
    );
  }
  
  export default App;
  