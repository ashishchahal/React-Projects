import React from 'react';
import './App.css';
import AddProject from './Components/AddProject';
import Project from './Components/Projects';
import Parent from './Components/Parent_Statless_Components';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      projects: []
    }

  }

  componentWillMount(){
    this.setState({
      projects: [{
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Shopping Cart',
        category: 'Web Development'
      }]
    })
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Project projects={this.state.projects} />
        <Parent />
      </div>
    )
  }
};

export default App;
