import React from 'react'
import MainMenu from "../Header/MainMenu.js"
/*
import Pic from "../AboutUs/Gruppebilde-800x366.jpg"
{Pic}

*/

const TextStuf = () =>( 
<div>
        <div className = "HiddenByMenu">
            <div className = "innhold">
                Dette er Current Mission!
            </div>
        </div>
    </div>
    
);


class Mission extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
      this.handleClick = this.handleClick.bind(this);
      {TextStuf()}
      
    }
    
    handleClick() {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }
    
    render() {
      const { count } = this.state;
      return (
        <>
          <MainMenu/>
          <button onClick={this.handleClick}>+1</button>
          <p>{count}</p>
        </>
      );
    }
  
  }


export default Mission;