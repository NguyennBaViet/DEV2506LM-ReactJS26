import React, { Component } from 'react'
interface ClassCompProps{
    studentName:string;
}
export default class ClassComp  extends Component<ClassCompProps> {
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Lấy dữ liệu trong props</h2>
        <p>Student Name:{this.props.studentName} </p>
      </div>
    )
  }
}
