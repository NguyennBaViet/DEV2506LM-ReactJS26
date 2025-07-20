import React, { Component } from 'react'
import { IStudent } from './IStudent'

interface IProps {
  onSubmit: (student: IStudent) => void
}

interface IState extends IStudent {
  updatedStudent: IStudent | null
}

export default class EventForm2 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      id: 1,
      name: "moi",
      age: 2,
      updatedStudent: null
    }
  }

  changeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    this.setState({
      [name]: name === "age" || name === "id" ? Number(value) : value
    } as unknown as Pick<IStudent, keyof IStudent>)
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { id, name, age } = this.state
    const student: IStudent = { id, name, age }
    this.props.onSubmit(student)
    this.setState({ updatedStudent: student })
  }

  render() {
    const { id, name, age, updatedStudent } = this.state

    return (
      <div>
        <form method="post" onSubmit={this.handleSubmit}>
          <div>
            Student ID:
            <input type="number" name="id" value={id} onChange={this.changeState} />
          </div>
          <div>
            Student Name:
            <input type="text" name="name" value={name} onChange={this.changeState} />
          </div>
          <div>
            Student Age:
            <input type="number" name="age" value={age} onChange={this.changeState} />
          </div>
          <button type="submit">Cập nhật</button>
        </form>

        {updatedStudent && (
          <div style={{ marginTop: "20px", backgroundColor: "#f0f0f0", padding: "10px" }}>
            <h2>Thông tin sinh viên đã cập nhật:</h2>
            <p>ID: {updatedStudent.id}</p>
            <p>Tên: {updatedStudent.name}</p>
            <p>Tuổi: {updatedStudent.age}</p>
          </div>
        )}
      </div>
    )
  }
}