import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>{this.props.event.description}</p>
      </div>
    )
  }
}

export default ListItem;