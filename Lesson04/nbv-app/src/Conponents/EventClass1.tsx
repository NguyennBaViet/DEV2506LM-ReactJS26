import React, { Component } from 'react'
interface IState{
    name:string,
    age:number
}
export default class EventClass1 extends Component<{},IState> {
    constructor(props:any){
        super(props);
        this.state = {
            name:"Viet",
            age:20
        }
    }
    changeState = () => {
        this.setState(
            {
                name:"Nguyễn Bá Việt",
                age:21
            }
        )
        alert ('Name: '+this.state.name +' Tuổi: '+this.state.age)
    }
  render() {
    return (
      <div>
        <h2>Welcome,{this.state.name}; Tuổi:{this.state.age}</h2>
        <button className='btn btn-success' type='button' onClick={this.changeState}> Change </button>
        <h2></h2>
      </div>
    )
  }
}
