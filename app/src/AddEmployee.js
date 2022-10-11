import React , {Component, useState} from'react';
import { Container, Form ,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

import AppNavbar from './AppNavbar';

class AddEmployee extends Component{

    render(){
        let name="cuong";
        let age="12";
        let adress="123";

        const handleClick = (e)=>{
            e.preventDefault()
            const employee = {name, age, adress}
            console.log(employee)
        }

        return(
            <div>
                <AppNavbar />
                <div className='container p-5'>
                    <h3>Add new employee</h3>
                    <Form>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type='text' className='form-control' id='' placeholder='Enter your Name' value={name}></input>
                        </div>
                        <div className='form-group'>
                            <label>Age</label>
                            <input type='number' className='form-control' id='' placeholder='Enter your age' value={age}></input>
                        </div>
                        <div className='form-group'>
                            <label>Adress</label>
                            <input type='text' className='form-control' id='' placeholder='Enter your adress' value={adress}></input>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Button className='btn btn-danger mr-3' tag={Link} to="/employees">Back</Button>
                            <Button className='btn btn-primary mr3' onclick ={handleClick}>Add</Button>
                        </div>
                        
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddEmployee;