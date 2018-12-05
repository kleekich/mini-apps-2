import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      events: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    
  }

  handleSearch() {
    console.log('Handle Search Invoked with ', this.state.userInput);
    fetch(`/events?q=${this.state.userInput}`)
    .then(response => response.json())
    .then(result => {
      console.log(JSON.stringify(result));
      this.setState({events: result});
    })
    .catch(err => {
      console.log(err);
    })

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
        <List events={this.state.events}/>
      </div>
    )
  }
}

export default App;