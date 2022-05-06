import React from 'react';
import './App.css';
import Headers from './Headers';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  return (
    <div className="ui container">
      <Headers />
      <AddContact />
      <ContactList />
      
    </div>
  );
}


export default App;


