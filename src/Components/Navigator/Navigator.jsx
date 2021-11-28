import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
    return(
        <div style={{ backgroundColor: "teal", margin: "auto", WebkitJustifyContent: "center" }} className="navbar navbar-expand">
            <Link to="/"><button className="btn btn-info">Home</button></Link>
            &nbsp;&nbsp;<Link to="/contact"><button className="btn btn-info">Contact Us</button></Link>
            &nbsp;&nbsp;<Link to="/book-list"><button className="btn btn-info">BookList</button></Link>
        </div>
    );
}
export default Navigator;