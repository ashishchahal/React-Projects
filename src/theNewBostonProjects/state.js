import React,{Component} from 'react';

class CheckBox extends Component{
  constructor(props){
    super(props);
    this.state={checked: true}
    this.handleChecked=this.handleChecked.bind(this);
  }

  handleChecked(){
    this.setState({checked: !this.state.checked})
  }

  render(){
    let message='';
    if(this.state.checked){
      message= 'checked';
    }else{
      message = 'unchecked';
}
    return(
      <div>
        <input type='checkbox' onChange={this.handleChecked} defaultChecked={this.state.checked} />
        <h2> CheckBox is {message} </h2>
      </div>
    )
  }
}

export default CheckBox;
