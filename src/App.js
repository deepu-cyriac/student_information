import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";

import './App.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Student from './pages/Student';

import ViewQueries from "./pages/admin/ViewQueries";
import ApproveLeave from "./pages/admin/ApproveLeave";
import ViewDetails from "./pages/admin/ViewDetails";

import PostQuery from "./pages/student/PostQuery";
import RequestLeave from "./pages/student/RequestLeave";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
            <Route path="/admin/viewdetails" element={<ViewDetails />} />
            <Route path="/admin/approveleave" element={<ApproveLeave />} />
            <Route path="/admin/viewqueries" element={<ViewQueries />} />
          <Route path="/student" element={<Student />} />
            <Route path="/student/postquery" element={<PostQuery />} />\
            <Route path="/student/requestleave" element={<RequestLeave />} />
        </Routes>
    </div>
    
  );
}

export default App;
