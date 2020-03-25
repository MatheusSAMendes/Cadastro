import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import UserForm from './components/form/UserForm';

function App() {
  return (
    <div className="App">
      <TopBar />
      <UserForm />
    </div>
  );
}

export default App;
