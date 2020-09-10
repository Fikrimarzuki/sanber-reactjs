import React, { useState, useEffect } from "react";
import { FormContext } from "../context/Context";
import sanberAPI from "../config/sanberAPI";

import ButtonAction from "./ButtonAction";
import FormAdd from "./AddForm";
import FormEdit from "./EditForm";

export default function Tugas10() {
  const [daftarHargaBuah, setDaftarHargaBuah] = useState([])
  const [isFormAdd, setIsFormAdd] = useState(false)
  const [isFormEdit, setIsFormEdit] = useState(false)
  const [editData, setEditData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchFruits();
  }, [])

  const fetchFruits = async () => {
    setIsLoading(true)
    const { data } = await sanberAPI.get("/fruits");
    setDaftarHargaBuah(data);
    setIsLoading(false);
  }

  const closeForm = type => {
    type === "add" ? setIsFormAdd(true) : setIsFormAdd(false);
    type === "edit" ? setIsFormEdit(true) : setIsFormEdit(false);
  }

  if (isLoading) {
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
    <FormContext.Provider
      value={{
        daftarHargaBuah,
        editData,
        isLoading,
        setDaftarHargaBuah,
        setEditData,
        setIsLoading,
        fetchFruits,
        closeForm
      }}
    >
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
                    <td style={{ width: '200px' }}>{value.price >= 0 ? value.price : 0}</td>
                    <td style={{ width: '200px' }}>{value.weight >= 0 ? value.weight / 1000 : 0} kg</td>
                    <td><ButtonAction index={index} /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div>
          { isFormAdd ? <FormAdd/> : "" }
          { isFormEdit ? <FormEdit /> : "" }
        </div>
      </div>
    </FormContext.Provider>
  )
}
