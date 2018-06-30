import React,{Component} from 'react';

class Stateful extends Component{
  render(){
    return (
      <div>
        <h1> The name of the genuius is {this.props.title} </h1>;
        True That!!
      </div>
    );
  }
}

export default Stateful;
