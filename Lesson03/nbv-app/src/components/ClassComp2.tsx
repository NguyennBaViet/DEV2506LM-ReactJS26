import React, { Component } from 'react'
interface Student{
    name:string,
    age:number,
    email:string
}
interface ClassComp2Props{
    student:Student;
}
export default class ClassComp2 extends Component<ClassComp2Props> {
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>
            Hello:
            <br />Name: {this.props.student.name}
            <br />Age: {this.props.student.age}
            <br />Email: {this.props.student.email}
        </h2>
      </div>
    )
  }
}