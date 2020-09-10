import React, { useState } from 'react';
import './App.css';
import { Context } from "./context/Context";
// import Form from "./Tugas-9/Form";
// import Tugas10 from "./Tugas-10/Tugas10";
// import Timer from "./Tugas-11/Timer";
// import Tugas13 from "./Tugas-13/Index";
import Tugas14 from "./Tugas-14/Index";

function App() {
  const [context, setContext] = useState({})

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        {/* <Form /> */}
        {/* <Tugas10 /> */}
        {/* <Timer /> */}
        {/* <Tugas13 /> */}
        <Tugas14 />
      </div>
    </Context.Provider>
  );
}

export default App;
