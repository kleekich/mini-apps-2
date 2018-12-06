import React from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import List from './List.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      events: [],
      pageCount: 10,
      currentPage: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }
  componentDidMount() {
    
  }

  handleSearch() {
    this.fetchEvents(this.state.userInput, 0, false);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      userInput: target.value
    })
  }

  handlePageClick(data){
    this.fetchEvents(this.state.userInput, data.selected+1, true);
  };

  fetchEvents(userInput, page, pageChanged){
    fetch(`/events?q=${userInput}&_page=${page}&_limit=10`)
    .then(response => response.json())
    .then(result => {
      this.setState({events: result});
      if(pageChanged) this.setState({currentPage: page});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <h1>Search History Events!</h1>
        <Search handleSearch={this.handleSearch} handleChange={this.handleChange} userInput={this.state.userInput}/>
        <List events={this.state.events}/>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={"..."}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    )
  }
}

export default App;