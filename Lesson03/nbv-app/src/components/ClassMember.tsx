import React, { Component } from 'react'
interface ClassMemberState {
    name:string,
    age:number
}

export default class ClassMember extends Component<{},ClassMemberState> {
    // state
    constructor(props:any){
        super(props);
        this.state = {
            name:'Devmaster',
            age:10
        }
    }
    // handleChange
    handleChange = ()=>{
        this.setState({
            name:'Việt',
            age:20
        })
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Đọc dữ liệu trong state</h2>
        <hr />
        <p>Xin chào:{this.state.name}</p>
        <p>Tuổi:{this.state.age}</p>
        <button onClick={this.handleChange}>Charge Info</button>
      </div>
    )
  }
}
