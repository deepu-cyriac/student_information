import React from "react";
import { Link } from "react-router-dom";

const NavS = (props) => {

    return(
        <div>
            <ul>
                <li><Link to="/student/postquery">Post Query</Link></li>
                <li><Link to="/student/requestleave">Request Leave</Link></li>
            </ul>          
        </div>
    );
}

export default NavS;