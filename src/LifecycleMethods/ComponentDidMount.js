import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class DidMount extends Component{
  componentWillMount(){
    alert('Component is about to be mount!');
  }

  componentDidMount(){
    alert('Component just rendered')
  }
  render(){
    alert('Component is rendering');

    return(
    <div>
      <h1> Hello World!! </h1>
    </div>)
  }
}
setTimeout(() =>{
  ReactDOM.render(<DidMount />,
  document.getElementById('root'))
}, 12000)


export default DidMount;
