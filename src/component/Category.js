import React, { useState } from 'react'
import Product from './Product';

const Category = () => {
    const [category, setCategory] = useState([]);

    const saveProduct = (product) => {
        setCategory([...category, product])
    }

    return (
        <div className="category">
            <Product saveProduct={saveProduct} />
            {
                category.map((product) => 
                   <div>
                        <li> {product.title},  {product.price}, {product.date} ,{product.pcs}</li>                                                                      
                   </div>
                )
            }
        </div>
    )
}

export default Category
