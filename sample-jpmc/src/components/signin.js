import React, { Component } from 'react'; 
import { Card, Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

class Signin extends Component {
    state = {  } 
    render() { 
        return (
          <Card className='card' style={{ width: '30rem', height: '28rem', marginTop: '50px', marginLeft: '32%'}}>
          <Card.Body>
            <Card.Title><h4>Sign in</h4></Card.Title>
            <br/>
            <Form>
            <Form.Group className="mb-3 text-muted">
            <h6>New user? 
              <a href="/signup"> Create an account</a>
            </h6>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Link to="/">
              <Button variant="primary" className='position-relative' style={{marginLeft: '42%'}} type="submit">
                Sign in
              </Button>
            </Link>
            </Form>

          </Card.Body>
        </Card>
        );
    }
}
 
export default Signin;



