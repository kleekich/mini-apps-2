import React from 'react';
import ReactDOM from 'react-dom';
//import List from './src/components/List.jsx';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hi from React</h1>
        {/* <List />  */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));

