import React, { useState, useContext } from "react";
import sanberAPI from "../config/sanberAPI";
import { FormContext } from "../context/Context";

export default function AddForm() {
  const context = useContext(FormContext);;
  const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: data.name,
      price: parseInt(data.price),
      weight: parseInt(data.weight)
    };
    context.closeForm();
    context.setIsLoading(true);
    await sanberAPI.post("/fruits", payload);
    context.fetchFruits();
  }

  const handleInput = (e, type) => {
    let value = e.target.value;
    const payload = { ...data };
    value = type !== "name" && !value ? 0 : value;
    payload[type] = value;
    setData(payload);
  }

  return (
    <div className="container" style={{ textAlign: "center", margin: "30px 60px" }}>
      <h1>Form add</h1>
      <form className="form-add" onSubmit={handleSubmit}>
        <div>
          <label>Nama </label>
          <input type="text" onChange={e => handleInput(e, "name")}/>
        </div>
        <br />
        <div>
          <label>Harga </label>
          <input type="number" onChange={e => handleInput(e, "price")}/>
        </div>
        <br />
        <div>
          <label>Berat </label>
          <input type="number" onChange={e => handleInput(e, "weight")}/>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <button className="button-close" onClick={context.closeForm}>Close</button>
    </div>
  )
}