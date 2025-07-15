import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/jsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import Func_Hvt_x from './components/Func_Hvt_x';
import FuncComp2 from './components/FuncComp2';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FuncComp3 from './components/FuncComp3';
import FuncListMember from './components/FuncListMember';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';
import EmployeeList from './components/EmployeeList';
import Employee from './components/IEmployee';
function App() {
  // Biến đối tượng 
  const objStudent = {
    name:"Việt",
    age:20,
    email:'nguyenbaviet2201@gmail.com'
  }
  //Lớp giao diện đối tượng sinh viên
  interface Student{
     id:number,
    name:string,
    age:number
}
  //Mock data
  const students:Student[] = [
    {id:1, name:"A",age:10},
    {id:2, name:"B",age:11},
    {id:3, name:"C",age:12},
    {id:4, name:"D",age:13},
    {id:5, name:"E",age:14},
  ];
  const employees:Employee[] = [
    {id:1, name:"Nguyễn Văn A",age:10,email:"nguyenvana@gmail.com"},
    {id:2, name:"Nguyễn Văn B",age:11,email:"nguyenvanb@gmail.com"},
    {id:3, name:"Nguyễn Văn C",age:12,email:"nguyenvanc@gmail.com"},
    {id:4, name:"Nguyễn Văn D",age:13,email:"nguyenvand@gmail.com"},
    {id:5, name:"Nguyễn Văn E",age:14,email:"nguyenvane@gmail.com"},
  ]
  return (
    <div className="App">
      
      <JsxExpression />
      <hr/>
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp />
      <FuncComp name="Việt" Company="Devmaster" />
      <hr />
      <FuncComp1 name="Mois" Company="Devmaster" />
      <hr />
      <Func_Hvt_x />
      <hr />
      <FuncComp2 />
      <FuncComp2 name="Nguyễn Bá Việt" age="20" email="nguyenbaviet2201@gmail.com" />
      <hr />
      <hr />
      <FuncComp3 student = {objStudent} />
      <ClassComp studentName='Việt' />
      <hr />
      <ClassComp1 name='Việt' age={20} />
      <hr />
      <ClassComp2 student = {objStudent} />
      <hr />
      <FuncListMember />
      <hr />
      <ClassMember />
      <hr />
      <StudentList students={students} />
      <hr />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
