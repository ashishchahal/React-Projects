import React,{Component} from 'react';

class Sibling extends Component{
  render(){
    const name=this.props.name;
    return(
      <div>
        <h1> Hey,my name is {name} </h1>
        <h2> Dont you think {name} is the prettiest name ever? </h2>
        <h2> Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}

export default Sibling;
