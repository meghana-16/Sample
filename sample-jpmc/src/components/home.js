import React, { Component } from 'react';
import bg from '../images/bg.png';
import User from './user';
import '/signup';
class Home extends Component {
    
    render() { 
        const myStyle={
            backgroundImage: 
     "url('/images/bg.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            // <div style={{ 
            //     backgroundImage: `url("../images/bg.png")` 
            //   }}>
            //     Hello World
            //   </div>
            <div className='main' style={{marginLeft: "60px", backgroundImage: `url("../images/bg.png")`}}>
                <br/>
                <h4>Users List</h4>
                <br/>
                {props.list.map(user => {})}
                {/* {this.props.users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                    />
                ))} */}
            </div>
        );
    }
}
 
export default Home;