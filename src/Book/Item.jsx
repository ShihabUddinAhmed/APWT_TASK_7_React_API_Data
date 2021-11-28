import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
        <tr>
            <td className="column text-center">
                <img src={props.cover} height="250px" />
            </td>
            <td><h3>{props.name}</h3></td>
            <td><h3>{props.author}</h3></td>
            <td><h3>{props.publishdate}</h3></td>
            <td><h3>{props.edition}</h3></td>
            <td><h3>{props.stock}</h3></td>
            <td><Link to={["/book-list/", props.name].join("")}><button className="btn btn-outline-info">Details</button></Link></td>
        </tr>
    );
}
export default Item;