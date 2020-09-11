import React, { useState, useEffect } from "react";
import sanberAPI from "../config/sanberAPI";

import ButtonAction from "./ButtonAction";
import FormAdd from "./AddForm";
import FormEdit from "./EditForm";

export default function Tugas10() {
  const [daftarHargaBuah, setDaftarHargaBuah] = useState([])
  const [isFormAdd, setIsFormAdd] = useState(false)
  const [isFormEdit, setIsFormEdit] = useState(false)
  const [editData, setIsEditData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchFruits();
  }, [])

  const fetchFruits = async () => {
    setLoading(true)
    const { data } = await sanberAPI.get("/fruits");
    setDaftarHargaBuah(data);
    setLoading(false);
  }

  const buttonHandler = async (event, index) => {
    if (event === "edit") {
      closeForm("edit")
      setIsEditData(daftarHargaBuah[index])
    }
    if (event === "delete") {
      setLoading(true)
      closeForm()
      await sanberAPI.delete(`/fruits/${daftarHargaBuah[index].id}`)
      fetchFruits()
    }
  }

  const addForm = async payload => {
    setLoading(true)
    await sanberAPI.post("/fruits", payload)
    fetchFruits()
  }

  const submitEditForm = async payload => {
    setLoading(true)
    await sanberAPI.put(`/fruits/${payload.id}`, payload)
    fetchFruits()
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

  if (loading) {
    return (
      <div className="table-wrapper">
        <h1>NOW LOADING</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="loader"></div>
        </div>
      </div>
    )
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
                  <td style={{ width: '300px' }}>{value.name}</td>
                  <td style={{ width: '200px' }}>{value.price > 0 ? value.price : 0}</td>
                  <td style={{ width: '200px' }}>{value.weight > 0 ? value.price / 1000 : 0} kg</td>
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
          ? <FormEdit close={closeForm} submit={submitEditForm} data={editData} />
          : ""
        }
      </div>
    </div>
  )
}
