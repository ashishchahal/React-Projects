import React from 'react';
import Child from './Child_Stateless_Component';
import Sibling from './Sibling_Stateless_Component';

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
    <div>
     <Child name={this.state.name} onChange={this.changeName} />
     <Sibling name={this.state.name} />
    </div>)
  }
}
export default Parent;
