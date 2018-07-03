import React from 'react';
import './App.css';
import Comment from './theNewBostonProjects/addingStateToComponents'
//import AddProject from './Components/AddProject';
//import Project from './Components/Projects';
//import Parent from './Components/Parent_Statless_Components';
//import Stateful from './Practice/Stateful_Component';

class App extends React.Component {
/*  constructor(props){
    super();
    this.state = {
      projects: [],
      name: 'Ashish',
      age: 23
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
  }           */

  render() {
    return (
      <div className="App">
        <Comment> Hey my name is Ashish </Comment>
        <Comment> Beans </Comment>
        <Comment> Grizzly </Comment>

      </div>
      



    )
  }
};

export default App;
