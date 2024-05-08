import { useState } from "react";

function App()
  {
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest, setInterest]=useState("");
    function getFormData (e)
    {
      console.warn(name,tnc,interest)
      e.preventDefault()
    }
    return (
<div className="App">
  <h1>Handle form in the React</h1>
  <form onSubmit={getFormData}>
    <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
<select onChange={(e)=>setInterest(e.target.value)}>
<option>Select option</option>
<option>Chishtian</option>
<option>Horsens</option>
</select><br/><br/>
<input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span> Accept Term and conditions</span>
<br/><br/>
<button type="submit">Submit</button>
<button>Clear</button>
  </form>
</div>
    )
  }
  export default App;
