import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {uuid} from "uuidv4";
import api from "../api/contacts"; 
import './App.css';
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";
import ContactDetail from "./contactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); 


  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put('/contacts/${contact.id}', contact);
    const {id, name, email} = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete('/contacts/${id}');
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    //const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //if(retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route 
            path="/" 
            exact 
            render={(props) => (
              <ContactList 
                {...props} 
                contacts={contacts} 
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route 
            path="/add" 
            render={(props) => (
              <AddContact
                {...props}
                addContactHandler={addContactHandler}
              />
            )}
          />
          <Route 
            path="/contact/:id" 
            component={ContactDetail}
          />
          <Route 
            path="/edit" 
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
        </Routes>
        {/*<AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
      </Router>
      
    </div>
  );
}

export default App;
