import React, { useContext } from "react";
import { FormContext } from "../context/Context";
import sanberAPI from "../config/sanberAPI";

export default function ButtonAction({ index }) {
  const context = useContext(FormContext);
  const editButtonAction = () => {
    context.closeForm("edit")
    context.setEditData(context.daftarHargaBuah[index])
  }
  const deleteButtonAction = async () => {
    context.setIsLoading(true)
    context.closeForm()
    await sanberAPI.delete(`/fruits/${context.daftarHargaBuah[index].id}`)
    context.fetchFruits()
  }

  return (
    <>
      <button onClick={editButtonAction}>Edit</button>
      <button onClick={deleteButtonAction}>Delete</button>
    </>
  )
}
