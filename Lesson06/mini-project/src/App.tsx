import React, { useState } from "react";
import Header from "./project/Header";
import Control from "./project/Control";
import StudentForm from "./project/StudentForm";
import StudentList from "./project/StudentList";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(prev => !prev);
  interface Student {
    MaSV: string,
    HoTen: string,
    Tuoi: number,
    Gender: string,
    NgaySinh: Date,
    DiaChi: string,
    TrangThai: string
}
  const student: Student[] = [
    { MaSV: "h1", HoTen: "A", Tuoi: 10, Gender: "Nam", NgaySinh: new Date("2005-01-22"), DiaChi: "Hà Nội", TrangThai: "Đang học" },
    { MaSV: "h2", HoTen: "B", Tuoi: 12, Gender: "Nữ", NgaySinh: new Date("2003-03-15"), DiaChi: "Đà Nẵng", TrangThai: "Đang học" },
    { MaSV: "h3", HoTen: "C", Tuoi: 11, Gender: "Nam", NgaySinh: new Date("2004-05-10"), DiaChi: "Hải Phòng", TrangThai: "Đang học" },
    { MaSV: "h4", HoTen: "D", Tuoi: 13, Gender: "Nữ", NgaySinh: new Date("2002-07-05"), DiaChi: "Hà Nội", TrangThai: "Đang học" },
    { MaSV: "h5", HoTen: "E", Tuoi: 14, Gender: "Nam", NgaySinh: new Date("2001-08-20"), DiaChi: "Hồ Chí Minh", TrangThai: "Đang học" }
  ]
  return (
    <>
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control onAdd={toggleForm} />
            <hr />
            <StudentList onEdit={toggleForm} student={student} />
          </div>
          {showForm && (
            <div className="col-md-5 col-12 border ms-0 mt-2  ms-sm-2  mt-sm-0">
              <StudentForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}