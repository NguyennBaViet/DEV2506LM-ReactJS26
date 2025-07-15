import React, { Component } from 'react'
interface ClassComp1Props{
    name:string,
    age:number
}
export default class ClassComp1 extends Component<ClassComp1Props> {
  render() {
    return (
      <div>
        <h2>Thông tin:
            <br /> Name: {this.props.name}
            <br />Age: {this.props.age}
        </h2>
      </div>
    )
  }
}
