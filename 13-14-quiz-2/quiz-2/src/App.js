import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ margin: "20px" }}>
      <DataList />
    </div>
  );
}

function DataList() {
  const data = [
    {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"},
    {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"},
    {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"},
    {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
  ]

  return (
    <div className="cards">
      {
        data.map((el, index) => {
          return (
            <div className="card" key={index}>
              <div>
                <img src={el.photo} alt={el.name} className="card-img"/>
              </div>
              <div className="card-content">
                <p style={{ fontWeight: "bold" }}>{el.name}</p>
                <p>{el.profession}</p>
                <p>{el.age} years old</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
