import React , {Component} from'react';
import { Container, Form ,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

import AppNavbar from './AppNavbar';

class AddEmployee extends Component{


    render(){
        return(
            <div>
                <AppNavbar />
                <div className='container p-5'>
                    <h3>Add new employee</h3>
                    <Form>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type='email' className='form-control' id='' aria-describedby='emailHelp' placeholder='Enter Email'></input>
                        </div>
                        <div className='form-group'>
                            <label>Age</label>
                            <input type='number' className='form-control' id='' placeholder='Enter your age'></input>
                        </div>
                        <div className='form-group'>
                            <label>Adress</label>
                            <input type='text' className='form-control' id='' placeholder='Enter your adress'></input>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <Button className='btn btn-danger mr-3' tag={Link} to="/employees">Back</Button>
                            <Button className='btn btn-primary mr3' type='submit'>Add</Button>
                        </div>
                        
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddEmployee;