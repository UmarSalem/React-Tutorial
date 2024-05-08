
import './App.css';
import React from "react";
import{Table} from 'react-bootstrap'

function App(){
const user = [
  {name:'umar', email:'umar@gmail.com', mobile:'343434'},
  {name:'usman', email:'usman@gmail.com', mobile:'454545'},
  {name:'Ali', email:'ali@gmail.com', mobile:'232323'},
  {name:'Ibrahim', email:'ibrahim@gmail.com', mobile:'565656'},
]
  return (
    <div className="App">
      <h1>List with Booststrap Table</h1>
      <Table striped variant="dark">
        <tbody>
          <tr>
          <td>Name</td>  
          <td>Email</td>
          <td>Mobile</td>
          </tr>
          {
            user.map((item,i)=>
            // item.mobile==='111222'?
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              </tr>
          /* </tr>:null */
            )
          }
        </tbody>
      </Table>
    </div>
  );
}
export default App;