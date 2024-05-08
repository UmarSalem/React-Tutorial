import { useState } from "react";
import Student from "./Student";


function App () {
  const [name,setName]=useState ("Umar Saleem");
  function apple()
  {
    alert("hello")
  }
return (
  <div className="App">
<h1>Props in React :) </h1>
  <Student name={name} />
  <button onClick={()=>setName("Ibrahim Saleem")}>Update</button>

{/* <Student name={"umar"} email="umar@gmail.com" others={{address:"Horsens", mobile:"343235"}}/>
<Student name ={"Ali"} email="ali@gmail.com" others={{address:"Copenhagen",mobile:"8766987"}}/> */}

  </div>
);
}
export default App;