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
      offset: 0,
      data: [],
      elements: [],
      perPage: 10,
      currentPage: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  componentDidMount() {
    
  }

  handleSearch() {
    console.log('Handle Search Invoked with ', this.state.userInput);
    fetch(`/events?q=${this.state.userInput}&_page=0&_limit=10`)
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

  handlePageClick(data){
    console.log(data)
    console.log('Handle Search Invoked with ', this.state.userInput);
    fetch(`/events?q=${this.state.userInput}&_page=${data.selected+1}&_limit=10`)
    .then(response => response.json())
    .then(result => {
      console.log(JSON.stringify(result));
      this.setState({events: result});
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({currentPage: data.selected});
  };

  render(){
    return(
      <div>
        <Search handleSearch={this.handleSearch} handleChange={this.handleChange} userInput={this.state.userInput}/>
        <h1>Hi from React!</h1>
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