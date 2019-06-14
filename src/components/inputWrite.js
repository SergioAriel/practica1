import React, {Component} from 'react';


class InputWrite extends Component {  


  handleInput(e) {
    const{ value , id } = e.target;

    this.setState({ 
      [id]: value
    })
    console.log(this.state)
  }

  handleSubmit (e){
    e.preventDefault();
    this.props.AddMessage(this.state);
  }


  render () {

    return (
    <div>
        <input placeholder="Escribe tu mensaje:" id="CampoEscritura" onChange={this.handleInput.bind(this)}></input>
        <button type="button" onClick={this.handleSubmit.bind(this)}>Enviar</button>
    </div>
       );
 
    } 
}



export default InputWrite;