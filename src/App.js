import './App.css';

function App() {
 /*  function apple(){
   alert("Haha you are funny") 
  } */
  let data="umar saleem"
  
  return(
    <div className='App'>
{/* <h1>Hello World</h1> */}

<h1>{data}</h1>
<button onClick={()=>alert("Ibrahim Saleem")}>Click me</button>
{/* <button onClick={apple}>Click me</button> */}
    </div>

  );
}
export default App