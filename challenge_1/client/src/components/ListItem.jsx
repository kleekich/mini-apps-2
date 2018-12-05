import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        hi
        <h1>{this.props.event}</h1>
      </div>
    )
  }
}

export default ListItem;