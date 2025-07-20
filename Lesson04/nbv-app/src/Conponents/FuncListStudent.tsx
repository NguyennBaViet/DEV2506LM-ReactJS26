import React from 'react'
import { IStudent } from './IStudent'
type FuncListStudentProps ={
    students: IStudent[]
}
export default function FuncListStudent({students}:FuncListStudentProps) {
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   students.map((students, index) => {
                    return (
                        <tr key={index}>
                        <td>{students.id}</td>
                        <td>{students.name}</td>
                        <td>{students.age}</td>
                        <td>Edit / View / Remove</td>
                    </tr>
                    )
                }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
