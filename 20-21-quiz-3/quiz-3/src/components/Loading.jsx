import React from "react";

export default function Loading() {
  return (
    <section>
      <div className="table-wrapper">
        <h1>NOW LOADING</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="loader"></div>
        </div>
      </div>
    </section>
  )
}
