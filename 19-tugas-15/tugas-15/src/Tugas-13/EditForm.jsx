import React, { useState, useEffect } from "react";

export default function EditForm({ data, submit, close }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [weight, setWeight] = useState("")

  useEffect(() => {
    setName(data.name ? data.name : "")
    setPrice(data.price ? data.price : 0)
    setWeight(data.weight ? data.weight : 0)
  }, [data])

  const handleSubmit = event => {
    event.preventDefault()
    const payload = {
      id: data.id,
      name,
      price: parseInt(price),
      weight: parseInt(weight)
    }
    setName("")
    setPrice("")
    setWeight("")
    close()
    submit(payload)
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
      <h1>Form Edit</h1>
      <form className="form-edit" onSubmit={handleSubmit}>
        <div>
          <label>Nama </label>
          <input type="text" onChange={e => handleInput(e, "name")} value={name}/>
        </div>
        <br />
        <div>
          <label>Harga </label>
          <input type="number" onChange={e => handleInput(e, "price")} value={price}/>
        </div>
        <br />
        <div>
          <label>Berat </label>
          <input type="number" onChange={e => handleInput(e, "weight")} value={weight}/>
        </div>
        <br />
        <button type="submit" >Submit</button>
      </form>
      <button className="button-close" onClick={close}>Close</button>
    </div>
  )
}