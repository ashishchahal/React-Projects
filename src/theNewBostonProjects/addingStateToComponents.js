import React,{Component} from 'react';

class Comment extends Component{
  constructor(props){
    super(props);
    this.state= {editing:false}
  }

  edit(){
     this.setState({editing:true});
  }

  remove(){
    console.log('Removing the content')
  }

  save(){
    this.setState({editing:false});
  }

  renderNormal(){
    <div className="containerClass">
      <div className="content"> Ashish </div>
      <button onClick="this.edit"> Edit </button>
      <button onClick="this.remove"> Remove </button>
    </div>
  }

  renderForm(){
    <div className="containerClass">
      <textArea defaultValue= 'Ashish'> </textArea>
      <button onClick="this.save"> Save </button>
    </div>
  }

  kya(){
    const renderN = this.renderNormal();
    const renderF = this.renderForm();
    if(this.state.editing){
      return renderN
    }else{
      return renderF    }
  }

  render(){
    const kya1= this.kya()
    return <div> {kya1} </div>;
    }
}

export default Comment;
