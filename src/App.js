import React, {Component} from 'react';
import InputWrite from './components/inputWrite';
import InputRead from './components/inputRead';


class App extends Component {    

    state = { 
      Message: [],
        };

        handleInputChange = Message => {
          this.setState({ Message });
          
        };

  render () { 

  return (
    <div>
        <InputWrite 
Message={this.state.Message}
onInputChange={this.handleInputChange}
        />
        <InputRead 
        Message={this.state.Message}
        />
    </div>
    );
  }
}


export default App;
