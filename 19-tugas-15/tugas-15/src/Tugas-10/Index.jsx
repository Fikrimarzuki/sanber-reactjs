import React, { useState } from "react";

export default function Tugas10() {
  const [daftarHargaBuah] = useState([
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]);

  return (
    <div className="table-wrapper">
      <h1>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
