import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class WillReceiveProps extends Component{
  componentWillReceiveProps(nextProps){
    alert('this will only run when the component will have props.'+ nextProps.text)
  }

  render(){
    return (<div>
              <h1> This component will receive props </h1>
              <h2> {this.props.text} </h2>
            </div>
          )
  }
}

ReactDOM.render(<div>

                  <WillReceiveProps />
                </div>, document.getElementById('root'))


setTimeout(() =>{
  ReactDOM.render(<WillReceiveProps text="Hello World!!!" />,
                  document.getElementById('root'));
}, 3000)
export default WillReceiveProps;
