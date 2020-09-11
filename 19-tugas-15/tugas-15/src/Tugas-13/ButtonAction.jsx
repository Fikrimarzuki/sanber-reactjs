import React from "react";

export default function ButtonAction({ buttonHandler, index }) {

  return (
    <>
      <button onClick={() => buttonHandler("edit", index)}>Edit</button>
      <button onClick={() => buttonHandler("delete", index)}>Delete</button>
    </>
  )
}
