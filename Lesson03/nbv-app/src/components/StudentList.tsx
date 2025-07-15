import { table } from 'console'
import React from 'react'
import Student from './Student'

interface StudentType {
  id: number
  name: string
  age: number
}

interface StudentListProps {
  students: StudentType[]
}

export default function StudentList({ students }: StudentListProps) {
  const elementStudent = students.map((student, index) => {
    return <Student key={index} {...student} />
  })

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {elementStudent}
      </tbody>
    </table>
  )
}
