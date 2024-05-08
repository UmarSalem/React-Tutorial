import {useState} from 'react';
import './App.css';

function App() {
// let data, setData="umar";
const [data,setData]=useState("Umar");
const [number, setNum]=useState (0)
 function UpdateData() 
{
setData("Ibrahim Saleem");
setNum(number+1)
// alert(data,number)
}
console.warn("Data:"+{data}+"Number:"+number);


  return (

<div className='App'>
<h1>State in React</h1>
<h2>Data:{data}</h2>
<h3>Number Of Time State Update/Counter:{number}</h3>
<button onClick={UpdateData}>Update data</button>
</div>
  );
}
 export default App;