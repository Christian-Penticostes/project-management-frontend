import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {
  const location = useLocation();

  const showNavbar = ["/","/login","/register"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


          <Route 
            path='/dashboard' 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
        </Routes>
    </>
  );
}

function App(){
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;