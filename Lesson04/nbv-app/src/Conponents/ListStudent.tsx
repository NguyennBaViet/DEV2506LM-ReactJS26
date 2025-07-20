import React from 'react'
import { IList } from './IList'
type ListStudentProps ={
    students:IList[]
}
export default function ListStudent({students}:ListStudentProps) {
  return (
    <div>
        <table>
            <thead className='table table-bordered'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((students,index)=>{
                        return(
                            <tr key={index}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                                <td>{students.age}</td>
                                <td>{students.gender}</td>
                                <td>{students.address}</td>
                                <td>{students.email}</td>
                                <td>{students.phone}</td>
                                <td>{students.state}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
