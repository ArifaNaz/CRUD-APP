import React, { Fragment } from "react";
import {Button,Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {Link,useNavigate}from 'react-router-dom';// to use history

function Home() {

  let history=useNavigate();
  //for edit
const handleEdit=(id, name,age)=>{
  localStorage.setItem('Name',name);
  localStorage.setItem('Age',age);
  localStorage.setItem('Id',id);

}
  const handleDElete=(id)=>{
    //got the id of particular employee
    var index=Employees.map(function(e){return e.id}).indexOf(id);
    //goes to employees arrya check and delete the particular index
    Employees.splice(index,1);
    //default route
    history('/');


  }
  return (
    <div>
      <Fragment>
      <h1 style={{margin:'2rem'}}>CURD APP</h1>
            <div style={{margin:'6rem'}}>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>  Name </th>

                        <th>Age   </th>

                        <th>  Actions  </th>

                    </tr>
                </thead>

                <tbody>
                    {/* Mapping though every element  
                        in the array and showing the  
                        data in the form of table */} 
                    {
                     Employees && Employees.length>0
                      ?
                      Employees.map((item)=>{
                        return(
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td> 
                                {/* wrap the button edit to this link */}
                                {/* <Link to={`/edit`}> */}
                                <Link to='/edit'>

                                <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>EDIT</Button>
                                </Link>
                                
                                &nbsp;
                                <Button onClick={()=> handleDElete(item.id)}>DELETE</Button>
                               </td>
                                
                            </tr>
                        )
                      })  
                    :
                    'No Data Available'
                    }
                </tbody>
            </Table>
            <br></br>
              {/* Button for redirecting to create page for 
                insertion of values */} 
            <Link className="d-grid gap-2" to='/create'>
              <Button size="lg">CREATE</Button>
            </Link>
            </div>
        </Fragment>
    </div>
  )
}

export default Home




