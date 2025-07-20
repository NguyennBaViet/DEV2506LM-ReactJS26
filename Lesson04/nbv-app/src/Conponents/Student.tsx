import React, { Component } from 'react'
import { IList } from './IList'
interface IProps {
    onSubmit:(students:IList) => void
}
export default class Student extends Component<IProps,IList> {
    constructor (props:IProps){
        super(props)
        this.state = {
            id:1,
            name:"nam",
            age:21,
            gender:"nam",
            address:"Hà nội",
            email:"nam123@gmail.com",
            phone:365986547,
            state:"active"
        }
    }
    changeState = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        this.setState({
            [name] : name === "age" || name === "id" || name === "phone" ? Number (value) : value
        } as unknown as Pick <IList,keyof IList>)
    }
    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault ()
        const {id,name,age,gender,address,email,phone,state} = this.state
        const students : IList = {id,name,age,gender,address,email,phone,state}
        this.props.onSubmit(students)
    }
  render() {
            const {id,name,age,gender,address,email,phone,state} = this.state
    return (
      <div>
        <form method='post' onSubmit={this.handleSubmit}>
            <div>
                ID:
                <input type="number" value={id} name='id' onChange={this.changeState} />
            </div>
            <div>
                Name:
                <input type="text" name="name" value={name} onChange={this.changeState} />
            </div>
            <div>
                Age:
                <input type="number" name="age" value={age} onChange={this.changeState} />
            </div>
            <div>
                Gender:
                <input type="text" name="gender" value={gender} onChange={this.changeState} />
            </div>
            <div>
                Address:
                <input type="text" name="address" value={address} onChange={this.changeState} />
            </div>
            <div>
                Email:
                <input type="text" name="email" value={email} onChange={this.changeState} />
            </div>
            <div>
                Phone:
                <input type="number" name="phone" value={phone} onChange={this.changeState} />
            </div>
            <button type='submit'>Cập nhật</button>
        </form>
      </div>
    )
  }
}
