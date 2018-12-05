import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      this.props.events.map(event => {
        <div>
          <ListItem event={event} />
        </div>
        
      })
    )
  }
}

export default List;
