import React, { Component } from 'react'

class Classcounter extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }

   
    increaseCount = () =>{
        this.setState((currState) => {
            return { count: currState.count + this.props.dif };
          });
    }
        
    decreaseCount = () =>{
        this.setState((currState) => {
            return { count: currState.count - this.props.dif };
          });
    }
  
    render() {
    
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increaseCount}>+{this.props.dif}</button>
        <button onClick={this.decreaseCount}>-{this.props.dif}</button>
      </div>
    )
  }
}

export default Classcounter
