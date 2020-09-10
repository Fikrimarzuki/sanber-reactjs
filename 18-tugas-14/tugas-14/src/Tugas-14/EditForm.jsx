import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "../context/Context";
import sanberAPI from "../config/sanberAPI";

export default function EditForm() {
  const context = useContext(FormContext);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(context.editData);
  }, [context.editData])

  const handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      id: context.editData.id,
      name: data.name,
      price: parseInt(data.price),
      weight: parseInt(data.weight)
    };
    setData({ name: "", price: 0, weight: 0 });
    context.closeForm();
    context.setIsLoading(true);
    await sanberAPI.put(`/fruits/${payload.id}`, payload);
    context.fetchFruits();
  }

  const handleInput = (e, type) => {
    let value = e.target.value;
    const payload = { ...data };
    value = type !== "name" && value < 0 ? 0 : value;
    payload[type] = value;
    setData(payload);
  }

  return (
    <div className="container" style={{ textAlign: "center", margin: "30px 60px" }}>
      <h1>Form Edit</h1>
      <form className="form-edit" onSubmit={ handleSubmit }>
        <div>
          <label>Nama </label>
          <input
            type="text"
            onChange={ e => handleInput(e, "name") }
            value={ data.name ? data.name : "" }
          />
        </div><br />
        <div>
          <label>Harga </label>
          <input
            type="number"
            onChange={ e => handleInput(e, "price") }
            value={ data.price ? data.price : 0 }
          />
        </div><br />
        <div>
          <label>Berat </label>
          <input
            type="number"
            onChange={ e => handleInput(e, "weight") }
            value={ data.weight ? data.weight : 0 }
          />
        </div><br />
        <button type="submit">Submit</button>
      </form>
      <button className="button-close" onClick={context.closeForm}>Close</button>
    </div>
  )
}
