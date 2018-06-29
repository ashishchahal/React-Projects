import React from 'react';
import Child from './Child_Stateless_Component';

class Parent extends React.Component{
  constructor(){
    super();
    this.state= {name: 'Frarthur'};
    this.changeName=this.changeName.bind(this);
  }

  changeName(newName){
    this.setState({name:newName});
  }
  render(){
    return (
    <Child name={this.state.name} onChange={this.changeName} />)
  }
}
export default Parent;
