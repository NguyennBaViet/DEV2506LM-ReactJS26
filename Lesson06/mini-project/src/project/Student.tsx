import React from 'react'
interface Student {
    MaSV:string,
    HoTen:string,
    Tuoi:number,
    Gender:string,
    NgaySinh:Date,
    DiaChi:string,
    TrangThai:string
}

export default function Student(props:Student) {
  return (
    <tr>
        <td>{props.MaSV}</td>
        <td>{props.HoTen}</td>
        <td>{props.Tuoi}</td>
        <td>{props.Gender}</td>
        <td>{props.NgaySinh.toLocaleDateString()}</td>
        <td>{props.DiaChi}</td>
        <td>{props.TrangThai}</td>
    </tr>
  )
}

