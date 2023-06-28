import React, { useEffect, useState } from 'react';
import axios  from 'axios';

export function Top5products() {

    const url = 'http://localhost:8080/api/product';

    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    //execute user effect hook only once when the component loads
    return (<>
        <h1>Top 5 Products</h1>
        <table>
            <thead>
                <tr><th>Product name</th><th>Price</th></tr>
            </thead>
            <tbody>
                {products.map((product,i)=>{
                    return(
                        <tr key={i}>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}