import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
          <input type='textArea' onChange={this.props.handleChange} value={this.props.userInput}></input>
          <button onClick={this.props.handleSearch}>Search</button>
      </div>
    )
  }
}

export default Search;