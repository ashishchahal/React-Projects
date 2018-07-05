import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class WillMount extends Component{
  componentWillMount(){
    alert('Component is about to be mount!');
  }

  render(){
    return(
    <div>
      <h1> Hello World!! </h1>
    </div>)
  }
}
setTimeout(() =>{
                  ReactDOM.render(<WillMount />,
                                  document.getElementById('root'))
                }, 2000)


export default WillMount;
