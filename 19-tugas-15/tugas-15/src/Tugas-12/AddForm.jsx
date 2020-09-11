import React, { useState } from "react";

export default function AddForm({ add, close }) {
  const [nama, setNama] = useState("")
  const [harga, setHarga] = useState(null)
  const [berat, setBerat] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const payload = {
      nama,
      harga: parseInt(harga),
      berat: parseInt(berat)
    }
    setNama("")
    setHarga("")
    setBerat("")
    close()
    add(payload)
  }

  const handleInput = (e, type) => {
    const value = e.target.value;
    switch(type) {
      case "nama":
        setNama(value)
        break;
      case "harga":
        setHarga(value)
        break;
      case "berat":
        setBerat(value)
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
          <input type="text" onChange={e => handleInput(e, "nama")}/>
        </div>
        <br />
        <div>
          <label>Harga </label>
          <input type="number" onChange={e => handleInput(e, "harga")}/>
        </div>
        <br />
        <div>
          <label>Berat </label>
          <input type="number" onChange={e => handleInput(e, "berat")}/>
        </div>
        <br />
        <button type="submit" >Submit</button>
      </form>
      <button className="button-close" onClick={close}>Close</button>
    </div>
  )
}