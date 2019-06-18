import React, {Component} from 'react';


class InputWrite extends Component {  


  render () {

    return (
    <div>
        <input 
        placeholder="Escribe tu mensaje:" 
        ref={input => this.InputWrite = input} 
        ></input>
        <button type="button" onClick={() => this.props.onInputChange(this.InputWrite.value)}>Enviar</button>
    </div>
       );
 
    } 
}



export default InputWrite; 
