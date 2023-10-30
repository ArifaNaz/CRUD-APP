import React,{useEffect, useState} from 'react'
import {Button,Form}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid}from 'uuid'; //auto generate id for new user
import {Link,useNavigate}from 'react-router-dom';// to use history

function Edit() {
      // Here usestate has been used in order 
    // to set and get values from the jsx 
    const [name ,setName]=useState('');
    const [age ,setAge]=useState('');
    const [id ,setId]=useState('');


    let history= useNavigate();
        // Getting an index of an entry with an id 

    var index=Employees.map(function(e){return e.id}).indexOf(id);

    // Function for handling the edit and  
    // pushing changes of editing/updating 
    const handleSubmit=(e)=>{
        //hide other events
        e.preventDefault();
        let a=Employees[index];
        //Name is property of array of object Employee and name is index from above local state variable name usestate
        a.Name=name;
        a.Age=age;
      
        history('/');
    }
//get fired on load of components
// Useeffect take care that page will 
    // be rendered only once 
        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setId(localStorage.getItem('Id'))


        },[])
    
  return (
    <div>
      
      <Form className='d-grid gap-2' style={{margin:'15rem'}}>
        <Form.Group className='mb-3' controlId='formName'>
        {/* value={name} binding the value that is given by user */}
        <Form.Control type='text' placeholder='Enter Name' value={name} 
        required onChange={ (e)=> setName(e.target.value)}>
        </Form.Control>
        </Form.Group>


      <Form.Group className='mb-3' controlId='forAge'>
      <Form.Control type='text' placeholder='Enter Age' value={age} 
      required onChange={ (e)=> setAge (e.target.value)}>
            </Form.Control>

      </Form.Group>
      <Button onClick={(e)=> handleSubmit(e)} type='submit'>UPDATE</Button>
      </Form>


    </div>
  )
}
export default Edit
