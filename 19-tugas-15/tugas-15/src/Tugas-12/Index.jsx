import React, { useState } from "react";
import ButtonAction from "./ButtonAction";
import FormAdd from "./AddForm";
import FormEdit from "./EditForm";

export default function Tugas12() {
  const [daftarHargaBuah, setDaftarHargaBuah] = useState([
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]);
  const [isFormAdd, setIsFormAdd] = useState(false)
  const [isFormEdit, setIsFormEdit] = useState(false)
  const [editData, setIsEditData] = useState({})
  const [indexData, setIndexData] = useState(null)

  const buttonHandler = (event, index) => {
    setIndexData(index)
    if (event === "edit") {
      closeForm("edit")
      setIsEditData(daftarHargaBuah[index])
    }
    if (event === "delete") {
      const newDaftarHargaBuah = [...daftarHargaBuah]
      newDaftarHargaBuah.splice(index, 1)
      setDaftarHargaBuah(newDaftarHargaBuah)
    }
  }

  const addForm = payload => setDaftarHargaBuah([...daftarHargaBuah, payload])
  const submitForm = payload => {
    let newDaftarHargaBuah = [...daftarHargaBuah]
    newDaftarHargaBuah.splice(indexData, 1, payload)
    setDaftarHargaBuah(newDaftarHargaBuah)
  }

  const closeForm = (type) => {
    setIsFormAdd(false)
    setIsFormEdit(false)
    if(type) {
      if(type === "add") {
        setIsFormAdd(true)
      }
      if(type === "edit") {
        setIsFormEdit(true)
      }
    }
  }

  return (
    <div className="table-wrapper">
      <h1>Tabel Harga Buah</h1>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={() => closeForm("add")} className="button-add">Add Buah</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            daftarHargaBuah.map((value, index) => {
              return (
                <tr key={index}>
                  <td style={{ width: '300px' }}>{value.nama}</td>
                  <td style={{ width: '200px' }}>{value.harga}</td>
                  <td style={{ width: '200px' }}>{value.berat / 1000} kg</td>
                  <td><ButtonAction buttonHandler={buttonHandler} index={index} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
        { isFormAdd
          ? <FormAdd close={closeForm} add={addForm} />
          : ""
        }
        { isFormEdit
          ? <FormEdit close={closeForm} submit={submitForm} data={editData} />
          : ""
        }
      </div>
    </div>
  )
}
