import React,{useState} from 'react'
import {Button,Form}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid}from 'uuid'; //auto generate id for new user
import {Link,useNavigate}from 'react-router-dom';// to use history

function Add() {
    const [name ,setName]=useState('');
    const [age ,setAge]=useState('');
    let history= useNavigate();
    const handleSubmit=(e)=>{
        //hide other events
        e.preventDefault();
        //create unique id
        const ids=uuid();
        //give first 9 digits,Slicing unique id 
        let uniqueId= ids.slice(0,8)
         // Fetching a value from usestate and  
        // pushing to javascript object 
        let a=name,
        b=age;
        // push in employee id
        Employees.push({id:uniqueId, Name:a, Age:b});
        //home component
        history('/');
    }

  return (
    <div>
    {/* margin 15rem from all 4sides */}

      <Form className='d-grid gap-2' style={{margin:'15rem'}}>
        {/* Fetching a value from input textfirld  
                    in a setname using usestate */}
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={ (e)=> setName(e.target.value)}>
            </Form.Control>
        </Form.Group>


        <Form.Group className='mb-3' controlId='forAge'>
            <Form.Control type='number' placeholder='Enter Age' required onChange={ (e)=> setAge (e.target.value)}>
            </Form.Control>

        </Form.Group>
         {/* handing a onclick event in button for 
                    firing a function */} 
        <Button onClick={(e)=> handleSubmit(e)} type='submit'>SUBMIT</Button>

                     {/* Redirecting back to home page */} 
                <Link className="d-grid gap-2" to='/'> 
                    <Button variant="info" size="lg"> 
                        Home 
                    </Button> 
                </Link> 

      </Form>
    </div>
  )
}

export default Add
