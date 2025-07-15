import React from 'react'
import FuncMember from './FuncMember'

export default function FuncListMember() {
  return (
    <div className='border p-2'>
        <h2>Danh sách thành viên</h2>
        <FuncMember name="Việt" age="20" />
        <FuncMember name="Moi" age="21" />
        <FuncMember name="You" age="22" />
        <FuncMember name="Me" age="23" />
    </div>
  )
}
