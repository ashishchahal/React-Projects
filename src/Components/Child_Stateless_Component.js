import React from 'react';

class Child extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  //to handle the event object created from onChange in select attribute
  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name);
  }
  render(){
    return( <div>
              <h1> Hey, my name is {this.props.name}! </h1>
              <select id="great_names" onChange={this.handleChange}>
                <option value="Spartacus"> Spartacus</option>
                <option value="Achilles"> Achilles </option>
                <option value="Hercules"> Hercules </option>
              </select>
            </div>
  )}
}
export default Child;
