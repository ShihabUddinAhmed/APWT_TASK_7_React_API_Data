import React, { useState, useEffect } from 'react';
import axios from "axios";
import Item from './Item';

const List = () => {
    const[item, setItem] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/library/book/list")
        .then(response=>{
            setItem(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }, []);

    return(
        <table className="table table-responsive">
            <tr style={{ fontSize: "25px", backgroundColor: "cyan" }}>
                <th>Book Cover Image</th>
                <th>Book Name</th>
                <th>Authors</th>
                <th>Publish Date</th>
                <th>Edition</th>
                <th>Stock</th>
                <th></th>
            </tr>
            {item.map(i=>(
                <Item cover={i.cover} name={i.name} author={i.authors} publishdate={i.publishdate} edition={i.edition} stock={i.stock} key={i.id} />
            ))}
        </table>
    );
}
export default List;