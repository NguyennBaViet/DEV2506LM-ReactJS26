import React from 'react'
interface Student{
    name:string,
    age:number,
    email:string
}
interface FuncComp3Props{
    student:Student
}
export default function FuncComp3(props:FuncComp3Props) {
  return (
    <div className='alert alert-danger'>
        <h2>
            Hello:
            <br />Name: {props.student.name}
            <br />Age: {props.student.age}
            <br />Email: {props.student.email}
        </h2>
    </div>
  )
}
