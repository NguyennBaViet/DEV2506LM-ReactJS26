import { parse } from 'path'
import React, { useState } from 'react'

export default function UseStateDemo() {
    // 1. Khởi tạo state, sử dụng hàm useState
    const [count, setCount] = useState(0) // Biến state (count = 0) giá trị khởi tạo ban đầu
    // 2. Khởi tạo state là một mảng
    const listInit = [1,2,5,9,8]
    const [list,setList] = useState(listInit)
    // Hàm xử lí sự kiện khi thêm số ngẫu nhiên vào list
    const handleList = () =>{
        setList([
            ...list,
            parseInt((Math.random() * 100).toString())
        ])
    }
    // 3. Khởi tạo state là một object
    const personInit = {
        id:22,
        name:"Việt",
        age:20
    }
    const [person,setPerson] = useState(personInit)
  return (
    <div className='alert alert-danger'>
        <h2>Sử dụng hàm useState</h2>
        <p>Count: {count}</p>
        <div>
            <button onClick={()=>setCount(count + 1)}>Tăng +</button>
            <button onClick={()=>setCount(count - 1)}>Giảm -</button>
        </div>
        <h3>List: {list.toString()}</h3>
        <button onClick={handleList}>Add new </button>
        <h3>Person: 
            <br />
            Name: {person.name} - Age: {person.age}
        </h3>
    </div>
  )
}
