import React,{Component} from 'react';

class Child extends Component{
  constructor(props){
    super(props);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange1(e){
    const name = e.target.value;
    this.props.onChange1(name);
  }

  handleChange(e){
    const kaam = e.target.value;
    this.props.onChange2(kaam);
  }
  render(){
    return(
      <div>
        <h1> Hi, no name is {this.props.name} </h1>
        <select id="great_names" onChange={this.handleChange1}>
          <option value='good'>good </option>
          <option value='bad'>bad </option>
          <option value='average'>average </option>
        </select>
        <br />

        <h2> and no work is {this.props.kaam} </h2>
        <select id="kaam" onChange={this.handleChange}>
          <option value='small'>small </option>
          <option value='insignificant'>insignificant </option>
          <option value='waste'>waste </option>
        </select>
      </div>
    );
  }
}

export default Child;
