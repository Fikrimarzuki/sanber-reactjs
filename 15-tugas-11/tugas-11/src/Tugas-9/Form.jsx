import React from "react";

export default function Form() {
  return (
    <div className="container">
      <h1>Form Pembelian Buah</h1>
      <form>
        <div className="form-group">
          <label className="label">Nama Pelanggan</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="label" style={{ position: "absolute", bottom: "0px" }}>Daftar Item</label>
          <div style={{ marginLeft: "20%" }}>
            <div>
              <input type="checkbox" name="semangka" value="semangka"/>
              <label>Semangka</label>
            </div>
            <div>
              <input type="checkbox" name="jeruk" value="jeruk"/>
              <label>Jeruk</label>
            </div>
            <div>
              <input type="checkbox" name="nanas" value="nanas"/>
              <label>Nanas</label>
            </div>
            <div>
              <input type="checkbox" name="salak" value="salak"/>
              <label>Salak</label>
            </div>
            <div>
              <input type="checkbox" name="anggur" value="anggur"/>
              <label>Anggur</label>
            </div>
          </div>
        </div>
        <button>Kirim</button>
      </form>
    </div>
  )
}