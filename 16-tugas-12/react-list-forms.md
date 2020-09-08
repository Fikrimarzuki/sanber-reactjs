Hari Ke-12 – Reactjs – Lists & Forms
Dalam sebuah aplikasi tentunya kita sering menemukan sebuah list atau table yang menampilkan data-data dan disana kita bisa mengolah datanya dengan menambahkan data, menghapus data dan update data. tentunya di reactjs pun perlu hal tersebut karna itu merupakan hal yang lumrah dalam aplikasi. lalu bagaimana cara mengimplementasikannya? ya mari kita simak pemaparan di bawah ini

Lists
lists atau daftar, atau sering juga kita melihat daftar dalam bentuk table merupakan salah satu opsi untuk menampilkan data, nah mari kita coba dengan kasus di bawah ini

misal kita memiliki data array of object seperti di bawah ini:

let pesertaLomba = [ 'Budi', 'Susi', 'Lala', 'Agung' ]
lalu kita ingin menampilkan data tersebut kita olah di masukkan ke dalam state lalu kita tampilkan dalam tabel. berikut contoh kode penggunaanya:

class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ]      
    }
  }

  render(){
    return(
      <>
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val}</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </>
    )
  }
}
berikut ini tampilannya:

https://blog.sanbercode.com/wp-content/uploads/2020/08/image-37-768x328.png

ya begitulah kurang lebih cara menampilkan lists di dalam class components

Forms
lalu lists sendiri itu erat kaitannya dengan penambahan data lalu bagaimana penerapannya, pertama mari kita coba buat form terlebih dahulu berdasarkan data diatas, itu berarti kita membutuhkan form dengan input nama

<form >
  <label>
    Masukkan nama peserta:
  </label>          
  <input type="text" />
  <input type="submit" value="Submit" />
</form>
lalu langkah berikutnya adalah kita tambahkan state baru seperti di bawah ini:

  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
     inputName : ""    
    }
  }
lalu tambahkan value input text nya dengan this.state.inputName, tambahkan handle di input text dan tambahkan handle di submit seperti di bawah ini:

<form onSubmit={this.handleSubmit}>
  <label>
    Masukkan nama peserta:
  </label>          
  <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
  <input type="submit" value="Submit" />
</form>
lalu tambahkan method handle submit dan handlechange di dalam class dan bind method tersebut dalam constructor

constructor(props){
  super(props)
  this.state ={
   pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
   inputName : ""    
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
  this.setState({inputName: event.target.value});
}

handleSubmit(event){
  event.preventDefault()
  this.setState({
    pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
    inputName: ""
  })
}
berikut ini contoh penerepan membuat lists dan forms:

import React, {Component} from "react"
import "./Lists.css"

class Lists extends Component{

  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
     inputName : ""    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputName: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.inputName)
    this.setState({
      pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
      inputName: ""
    })
  }

  render(){
    return(
      <>
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val}</td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Masukkan nama peserta:
          </label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists
Updated on September 8, 2020

source: https://blog.sanbercode.com/docs/kurikulum-reactjs/pekan-3-materi/hari-ke-12-reactjs-lists-forms/
