import React from 'react';
import Search from './Search.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log('Handle Search Invoked!');


  }

  handleChange(event) {
    console.log('Handle Change Invoked!');
    const target = event.target;
    this.setState({
      userInput: target.value
    })
  }

  render(){
    return(
      <div>
        <Search handleSearch={this.handleSearch} handleChange={this.handleChange} userInput={this.state.userInput}/>
        <h1>Hi from React!</h1>
        <List />
      </div>
    )
  }
}

export default App;