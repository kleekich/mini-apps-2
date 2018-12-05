import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSearch}>
          <input type='textArea' onChange={this.props.handleChange} value={this.props.userInput}></input>
          <input type='submit' value='search'></input>
        </form>
      </div>
    )
  }
}

export default Search;