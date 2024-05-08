import { useState } from "react";


function App(){
const [data,setData] =useState (null)
const [print,setPrint]=useState(false)
  function getData (val)
  {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <h1>Hello World, Here is my Data you enter + {data}</h1>
      <input type="text" onChange={getData}/>
      <div>
      <button onClick={()=>setPrint(true)}>Print Data</button>
      </div>
            </div>
  );
}
export default App;