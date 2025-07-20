import React, { Component } from 'react'
interface IState {
    name:string,
    age:number
}
export default class EventForm1 extends Component<{},IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            name:"moi",
            age:2
        }
    }
    changeState = (event:any)=>{
        //Lấy thành phần vã dữ liệu trên form
        let name = event.target.name;
        let value = event.target.value;
        const val = name === "age" ? Number(value): value;
        //Cập nhật vào state
        this.setState(prevState =>({
            ...prevState,
            [name]:val
        }));
    }
    //handleSubmit
    handleSubmit = (event:any)=>{
        event.prevenDefault();
        alert('Tên: '+this.state.name +'Age'+this.state.age)
    }
  render() {
    return (
      <div>
        <div>
            <p>Student name:{this.state.name} , Student age:{this.state.age}</p>
        </div>
        <form method='post'>
            <div>
                Student name: <input type='text' name="name" onChange={this.changeState}></input>
            </div>
            <div>
                Student age: <input type="number" name="age" onChange={this.changeState} />
            </div>
            <button onClick={this.handleSubmit} >Cập nhật</button>
        </form>
      </div>
    )
  }
}
