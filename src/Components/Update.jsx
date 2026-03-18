import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../Axios/Axios";

function Update() {

  const location = useLocation();
  const [iddata, setiddata] = useState(null);

  const nameref = useRef();
  const brandref = useRef();
  const priceref = useRef();
  const ratingref = useRef();
  const imageref = useRef();
  const sizesref = useRef();
  const stockref = useRef();

  useEffect(() => {
    const id = location.state?.id;
    setiddata(id);
  }, [location]);

  const myupdatefunction = async () => {
const sizesArray = sizesref.current.value.split(",");

const body = {
  Name: nameref.current.value,
  Brand: brandref.current.value,
  Price: Number(priceref.current.value),
  Rating: parseInt(ratingref.current.value), 
  Image: imageref.current.value,
  
  Sizes: JSON.stringify(sizesArray), 
  SizesArray: sizesArray,

  Stock: Number(stockref.current.value),

  CreatedAt: new Date().toISOString()
};
console.log(JSON.stringify(body, null, 2));
    try {

      const response = await api.patch(
        `api/Product/UpdateProducts/${iddata}`,
        body
      );

      console.log("Updated:", response.data);

      alert("Product Updated Successfully");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-container">
  <h2>Update Product</h2>
  <form>
    <label>Name</label>
    <input ref={nameref} />

    <label>Brand</label>
    <input ref={brandref} />

    <label>Price</label>
    <input type="number" ref={priceref} />

    <label>Rating</label>
    <input type="number" ref={ratingref} />

    <label>Image URL</label>
    <input ref={imageref} />

    <label>Sizes</label>
    <input ref={sizesref} />

    <label>Stock</label>
    <input type="number" ref={stockref} />

    <button type="button" onClick={myupdatefunction}>
      Update Product
    </button>
  </form>
</div>
  );
}

export default Update;