import React from 'react';
import './App.css';
import { Form, CardList } from './components';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  fetchProfile = async (userInput) => {
    const resp = await axios.get(`https://api.github.com/users/${userInput}`);
    this.setState({profiles: [...this.state.profiles, resp.data]});
  }

  render() {
    return (
      <div 
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col items-center pt-20"
      >
        <h1 className="text-4xl">The GitHub Cards App</h1>
        <Form onSubmit={this.fetchProfile} />
        <CardList profiles={this.state.profiles} />
      </div>  
    )
  }
};

export default App;
