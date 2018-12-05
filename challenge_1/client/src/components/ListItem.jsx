import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      
        <h1>{this.props.event.description}</h1>
      </div>
    )
  }
}

export default ListItem;