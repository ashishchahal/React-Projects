import React,{Component} from 'react';
import Child from './Child'

class Parent1 extends Component{
  constructor(props){
    super(props);
    this.state={name:'Munna',
                kaam:'Timepass'
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName,newWork){
    this.setState({name:newName,
                    kaam:newWork})
  }





  render(){
    return(
      <div id="relation">
        <Child name={this.state.name} kaam={this.state.kaam} onChange1={this.changeName} onChange2={this.changeName}/>


      </div>
    )
  }
};
export default Parent1;
