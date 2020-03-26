import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import UserForm from './components/form/UserForm';

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <UserForm />
    </div>
  );
}

