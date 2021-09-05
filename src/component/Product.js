import React, { useState } from 'react'

const Product = (props) => {
    //Product (string title, double price, date added, int pcs (normally 1, could be e.g. 2, 10 or 50) )
    const [product, setProduct] = useState({ title: '', price: '', date: '', pcs: '' })
    const handleChange = (e) => {
        setProduct({
        
            ...product, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.saveProduct(product)
    }


    return (
        <div className="product">
            <h1>This is Product page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={product.title} onChange={handleChange} />
                <input type="text" name="price" value={product.price} onChange={handleChange} />
                <input type="date" name="date" value={product.date} onChange={handleChange} />
                <input type="text" name="pcs" value={product.pcs} onChange={handleChange} />
                <button type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Product
