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
      <div className="content"> {this.props.children} </div>
      <button onClick="this.edit"> Edit </button>
      <button onClick="this.remove"> Remove </button>
    </div>
  }

  renderForm(){
    <div className="containerClass">
      <textArea defaultValue= {this.props.children}> </textArea>
      <button onClick="this.save"> Save </button>
    </div>
  }

  render(){
    if(this.state.editing){
      return this.renderNormal()
    }else{
      return this.renderForm()
    }
    }
}

export default Comment;
