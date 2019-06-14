import React, {Component} from 'react';
import InputRead from './components/inputRead'
import InputWrite from './components/inputWrite';


class App extends Component {    

    state = { 
      Message: "",
    }




  handleAddMessage(Message){
    this.Message({
      Message:[...this.state.Message]
    })
  }

  render () { 
  return (
    <div>
        <InputWrite 
        Message={this.state.Message}
        />
        <InputRead
        addMessage={this.handleAddMessage.bind(this)}
        />
    </div>
    );
  }
}


export default App;