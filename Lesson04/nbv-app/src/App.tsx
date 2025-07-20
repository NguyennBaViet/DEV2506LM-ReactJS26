import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IStudent } from './Conponents/IStudent';
import FuncListStudent from './Conponents/FuncListStudent';
import EventFunc1 from './Conponents/EventFunc1';
import EventClass1 from './Conponents/EventClass1';
import EventForm1 from './Conponents/EventForm1';
import EventForm2 from './Conponents/EventForm2';
import EventForm3 from './Conponents/EventForm3';
import Student from './Conponents/Student';
import { IList } from './Conponents/IList';
import ListStudent from './Conponents/ListStudent';

// function App() {
//   const students:IStudent[]= [
//     {id: 1,name:"Nguyễn Văn A",age:20},
//     {id: 2,name:"Nguyễn Văn A",age:20},
//     {id: 3,name:"Nguyễn Văn A",age:20},
//     {id: 4,name:"Nguyễn Văn A",age:20},
//     {id: 5,name:"Nguyễn Văn A",age:20},
//   ];
//   const handleSubmit = (data:IStudent)=>{
//     students.push(data);
//     console.log(students,students)
//   }
//   return (
//     <div className="container border">
//       <div>
//         <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster' />
//         <FuncListStudent students={students} />
//         <hr />
//         <EventFunc1 />
//         <hr />
//         <EventClass1 />
//         <hr />
//         <EventForm1 />
//         <hr />
//         <EventForm2 onSubmit = {handleSubmit} />
//         <hr />
//         <EventForm3 />
//       </div>
//     </div>
//   );
// }

// export default App;
interface IState {
  students: IList[]
}
export default class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      students: []
    }
  }

  handleSubmit = (student: IList) => {
    this.setState(prev => ({
      students: [...prev.students, student]
    }))
  }

  render() {
    return (
      <div className="container border">
        <Student onSubmit={this.handleSubmit} />
        <ListStudent students={this.state.students} />
      </div>
    )
  }
}

