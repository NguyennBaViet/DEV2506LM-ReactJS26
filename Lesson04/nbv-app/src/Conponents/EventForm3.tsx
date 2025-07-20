import React, { ChangeEvent, Component, FormEvent } from 'react'

interface IState {
  name: string;
  age: number;
  course: string;
}

export default class EventForm3 extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "việt",
      age: 20,
      course: "HTML5"
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const val = name === "age" ? Number(value) : value;
    this.setState(prevState => ({
      ...prevState,
      [name]: val,
    }));
  }

  handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert(`Tên: ${this.state.name}, Tuổi: ${this.state.age}, Khóa học: ${this.state.course}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Tên:
            <input
              type="text"
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Tuổi:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Khóa học:
            <select
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
            >
              <option value="HTML5">HTML5</option>
              <option value="CSS3">CSS3</option>
              <option value="JS">JS</option>
              <option value="BS">BS</option>
            </select>
          </p>
          <button type='submit'>Cập nhật</button>
        </form>
      </div>
    )
  }
}