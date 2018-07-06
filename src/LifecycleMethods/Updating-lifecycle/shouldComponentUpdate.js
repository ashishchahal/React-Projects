import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class ShouldComponentUpdate extends Component{
  constructor(props){
    super(props);
    this.state = {subtext: 'Put me in a <h2> please'}
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props.text !== nextProps.text;

  { /*  if((this.props.text === nextProps.text) &&
        (this.state.subtext === nextState.subtext)){
      console.log("Props and states have not been changed so it is not gonna run");
      return false;
    }else{
      console.log('Okay fine, I will update');
      return true;
    } */ }
  }

  render(){
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    )
  }
}

export default ShouldComponentUpdate;

setTimeout(() =>{
  ReactDOM.render(<ShouldComponentUpdate />,
          document.getElementById('root'));
}, 3000)
