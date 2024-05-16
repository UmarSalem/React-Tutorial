import './App.css';
import React,{useState} from 'react';
function App (){
  const [firstName,setfirstName]=useState("");
  const [lastName,setlastName]=useState("");
  const [name,setName]=useState("");

  function fullName() {
    setName(firstName+""+lastName)
  }

  return (
    <div className='App'>
      <h1>Hook General</h1>
      <input type='text' firstName="firstName" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} /> <br/><br/>
      <input type='text' lastName="lastName" value={lastName} onChange={(e)=>{setlastName(e.target.value)}} /> <br/><br/>
      <button type="button" onClick={fullName} >Save New User</button>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{name}</h2>
    </div>
  );
}
export default App;