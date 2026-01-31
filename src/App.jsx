
import './App.css';
import Tabs from './Tabs';
import Tab from './Tab';
import { useState } from 'react';

function App() {

  const [ parentActiveTab, setParentActiveTab ] = useState('Profile');

  return (
    <div className="App">
      <Tabs defaultActiveTab="Profile" parentActiveTab={parentActiveTab} setParentActiveTab={setParentActiveTab}>

        <Tab title="Overview">Overview Content</Tab>

        <Tab title="Profile">Profile Content</Tab>

        <Tab title="Settings">Settings Content</Tab>
        <Tab title="About">About Content</Tab>

      </Tabs>
    </div>
  
  )
}
export default App
