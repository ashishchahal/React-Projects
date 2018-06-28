import React from 'react';

class NewProject extends React.Component{
  constructor(props){
    super(props);
    this.state= {name:'Ashish',
                country:'India'};
    this.changeCountry=this.changeCountry.bind(this);
  }
  changeCountry(){
    const newCountry = this.state.country=== 'India'? 'USA':'India';
    this.setState({country:this.newCountry});
  }


  render() {
    return (<div>
      <h1>This is {this.state.name} project </h1>
      <h2> {this.state.name} country is {this.state.country} </h2>
       </div>)
     }
}
export default NewProject;
