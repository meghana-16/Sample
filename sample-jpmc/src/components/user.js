import React, { Component } from 'react';
import { Card } from 'react-bootstrap'; 




const User = (props) => {
    const list1 = [{name:"Meghana", email:"meghanabusam07@gmail.com", password:"123"}]
        return (
            <Card className='card' style={{width: "30rem"}}>
                <Card.Body>
                    <h6>First name: {list1.name1}</h6>
                    <h6>Password: {list1.password}</h6>
                    <h6>Email: {list1.email}</h6>
                </Card.Body>
            </Card>
        );
}
 
export default User;