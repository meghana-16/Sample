import React, { Component, useState } from 'react';
import { Card, Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import User from './user';


const Signup = () => {
    const [name1, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");
    const [list, setList] = useState([]);
    const change= (e) => {
      e.preventDefault();
      const temp = {
        name1:name1,
        email:email,
        password:pass
      }
      console.log(temp);
      setList([...list,temp]);
      console.log(list);
    }
   
        return (
          <Card className='position-absolute' style={{ width: '32rem', height: '37rem', marginTop: '10px', marginLeft: '32%'}}>
          <Card.Body>
            <Card.Title><h4>Sign up here!</h4></Card.Title>
            <br/>
            <Form>
      
            <Form.Group className="mb-3" controlId="formBasicFirstname">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" name="name1" value={name1} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={pass} onChange={(e) => setpass(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Link to="/signin">
              <button style={{marginLeft: '42%'}} type="submit" onClick={change}>Sign up</button> 
      
            </Link>
            </Form>
            
          </Card.Body>
        </Card>
        );

}
 
export default Signup;




