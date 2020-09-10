import React, { useState } from "react";

export default function AddForm({ add, close }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(null)
  const [weight, setWeight] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const payload = {
      name,
      price: parseInt(price),
      weight: parseInt(weight)
    }
    setName("")
    setPrice("")
    setWeight("")
    close()
    add(payload)
  }

  const handleInput = (e, type) => {
    const value = e.target.value;
    switch(type) {
      case "name":
        setName(value)
        break;
      case "price":
        setPrice(value)
        break;
      case "weight":
        setWeight(value)
        break;
      default:
        break;
    }
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
        <button type="submit" >Submit</button>
      </form>
      <button className="button-close" onClick={close}>Close</button>
    </div>
  )
}