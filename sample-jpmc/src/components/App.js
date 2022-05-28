import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';
// import Signin from './signin';
// import Signup from './signup';
// import Header from './header';
// import Home from './home';
import Sample from './sample';


function App() {
  const users = [
    {id:1, firstname:"Meghana", lastname:"Busam", email:"meghanabusam07@gmail.com"},
    {id:2, firstname:"Manasi", lastname:"Busam", email:"manasibusam04@gmail.com"}
]

  return (
    <Container fluid >
      <Router>
        <Header/>
        <Routes>
          {/* <Route
            path="/"
            exact
            render={(props) => (
              <Home 
                {...props} 
                users={users} 
              />
            )}
          />
          <Route
            path="/signin"
            element={<Signin/>}
          />
          <Route
            path="/signup"
            element={<Signup/>}
          /> */}
          <Route
            path="/sample"
            element={<Sample/>}
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
