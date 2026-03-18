import React, { useRef } from 'react';
import api from '../Axios/Axios';
// import './AddProduct.css'; // Import the CSS file

function AddProduct() {
  const nameref = useRef();
  const brandref = useRef();
  const priceref = useRef();
  const ratingref = useRef();
  const imageref = useRef();
  const sizesref = useRef();
  const stockref = useRef();

  const AddProducts = async () => {
    const sizesArray = sizesref.current.value.split(',').map(s => s.trim());

    const body = {
      Name: nameref.current.value,
      Brand: brandref.current.value,
      Price: Number(priceref.current.value),
      Rating: parseInt(ratingref.current.value),
      Image: imageref.current.value,
      Sizes: JSON.stringify(sizesArray),
      Stock: Number(stockref.current.value),
    };

    try {
      const axiosdata = await api.post("api/Product/AdddProduct", body);
      console.log(axiosdata);
      alert('Product added successfully!');
    } catch (err) {
      console.error("Error adding product:", err);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form">
        <label>Name</label>
        <input ref={nameref} placeholder="Product Name" />

        <label>Brand</label>
        <input ref={brandref} placeholder="Brand Name" />

        <label>Price</label>
        <input type="number" ref={priceref} placeholder="Price in USD" />

        <label>Rating</label>
        <input type="number" ref={ratingref} placeholder="Rating 1-5" />

        <label>Image URL</label>
        <input ref={imageref} placeholder="https://example.com/image.jpg" />

        <label>Sizes (comma separated)</label>
        <input ref={sizesref} placeholder="S,M,L,XL" />

        <label>Stock</label>
        <input type="number" ref={stockref} placeholder="Available stock" />

        <button type="button" onClick={AddProducts}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;