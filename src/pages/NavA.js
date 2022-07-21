import React from "react";
import { Link } from "react-router-dom";

const NavA = (props) => {

    return(
        <div>
            <ul>
                <li><Link to="/admin/viewdetails">View Details</Link></li>
                <li><Link to="/admin/approveleave">Approve Leave</Link></li>
                <li><Link to="/admin/viewqueries">View Queries</Link></li>
            </ul>          
        </div>
    );
}

export default NavA;