import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const[detail, setDetail] = useState([]);
    const {name} = useParams();

    const makeURL = () =>
    {
        var url = ["http://127.0.0.1:8000/api/library/book/name/", name].join('');
        console.log(url);
        return url;
    }

    useEffect(()=>{
        axios.get(makeURL())
        .then(response=>{
            console.log(response.data);
            setDetail(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[])

    return(
        <div>
            {detail.map(d=>(
                <table className="table table-responsive" style={{ marginTop: "50px" }} key={d.id}>
                    <tr className="column text-center">
                        <td>
                            <img src={d.cover} height="500px"/>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h2>{d.name}</h2>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h3>Author: {d.authors}</h3>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h4>Publish Date: {d.publishdate}</h4>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h4>Edition: {d.edition}</h4>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h4>Stock: {d.stock}</h4>
                        </td>
                    </tr>
                </table>
            ))}
        </div>
    );
}
export default ItemDetails;