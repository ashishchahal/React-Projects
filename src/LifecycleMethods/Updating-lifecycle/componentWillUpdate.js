import React,{Component} from 'react';

class ComponentWillUpdate extends Component{
  componentWillUpdate(nextProps,nextState){
    alert('non react setup before a component renders such as interacting with an api')
  }

  render(){
    return(<h1> Hello World </h1>)
  }
}

export default ComponentWillUpdate;

setTimeout(())
