import React, { use, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Control from './components/Control';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import IStudent from './IStudent';
import Swal from 'sweetalert2';
function App() {
  //Quản lí trạng thái hiển thị của form => state: isForm
  const [isForm,setIsForm] = useState(false);
  //Mock data
  const studentsInit: IStudent[] = [
    {
      studentId: "S001",
      studentName: "Nguyễn Văn A",
      studentAge: 20,
      gender: true,
      birthDay: new Date("2003-01-01"),
      address: "Hà Nội",
      isActive: true
    }
    ,
    {
      studentId: "S002",
      studentName: "Nguyễn Thị B",
      studentAge: 22,
      gender: false,
      birthDay: new Date("2001-05-15"),
      address: "Đà Nẵng",
      isActive: false
    }
  ];
  //Tổ chức dữ liệu của ứng trong state: students
  const [students,setStudents] = useState<IStudent[]>(studentsInit);
  //render => Students vào component (StudentList)
  //Hàm xử lí sự liện khi nhấn thêm mới trên component (Control)
  const handleAdd = () =>{
    setIsForm(true);
    //Cập nhật nút submit dựa theo trạng thái nút lệnh xử lí => actionName
    setActionName("Add");
    setSelectStudent(null); // Reset selected student when adding new
  }
  //3.Hàm xử lí sự kiện xem (View)
  const handleViewStudent = (student: IStudent) => {
    setIsForm(true);
    //Cập nhật nút submit dựa theo trạng thái nút lệnh xử lí => actionName
    setActionName("View");
    console.log("Từ view (onviewStudent): ", student);
    //cập nhật dữ liệu để chuyển lên form
    setSelectStudent(student); 
  }
  const handleEditStudent = (student: IStudent) => {
    setIsForm(true);
    //Cập nhật nút submit dựa theo trạng thái nút lệnh xử lí => Sửa
    setActionName("Edit");
    console.log("Từ edit (onEditStudent): ", student);
    //cập nhật dữ liệu để chuyển lên form
    setSelectStudent(student); 
  }
  //Xóa
  const handleDeleteStudent = (student: IStudent) => {
    // setStudents(students.filter(s => s.studentId !== student.studentId));
    // console.log("Từ delete (onDeleteStudent): ", student);
    Swal.fire({
      title:"Bạn có chắc chắn muốn xóa không?",
      html:`Sinh viên <b>${student.studentName}</b> sẽ bị xóa`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy"
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        setStudents((prev) =>
          prev.filter((s) => s.studentId !== student.studentId)
        );
        Swal.fire({
          icon: "success",
          title: "Đã xóa thành công",
          text: `Sinh viên ${student.studentName} đã được xóa thành công`,
          timer: 2000,
          showConfirmButton: false
        });
        setIsForm(false);
        setSelectStudent(null);
        setActionName("");
      }
    });
  }
  //4.state: actionName => để quản lí trạng thái form: xem, sửa ,xóa
  const [actionName, setActionName] = useState("");
  //5.close form
  const handleCloseForm = () => {
    setIsForm(false);
  }
  //6.quản lí dữ liệu form
  const [selectedStudent, setSelectStudent] = useState<IStudent | null>(null);
  function handleSubmitForm(student: IStudent | null): void {
    if (student) {
      if (actionName === "Add") {
        setStudents([...students, student]);
      } else if (actionName === "Edit") {
        setStudents(students.map(s => (s.studentId === student.studentId ? student : s)));
      }
    }
    handleCloseForm();
  }
  // 7. Quản lí sắp xếp
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const handleSortChange = (sortOrder: "asc" | "desc") => {
    setSortOrder(sortOrder);
  };
  // Sắp xếp danh sách sinh viên theo tên
  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.studentName.localeCompare(b.studentName);
    } else {
      return b.studentName.localeCompare(a.studentName);
    }
  }); 
  // 8. Tìm kiếm sinh viên
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const handleSearchChange = (keywork:string  ) => {
    setSearchKeyword(keywork);
  };
  const filteredStudents = sortedStudents.filter(student =>
    student.studentId.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    student.studentName.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return (
    <section className="container-fluid">
        <Header />
        <section className="container mt-4">
          <div className="row my-2">
              <div className="col-12 col-md border">
                  {/* <Control onAdd={() => setIsForm(true)} /> */}
                  <Control onAdd={handleAdd}
                   onSortChange={handleSortChange}
                   onSearchChange={handleSearchChange} />
                  <hr/>
                  <StudentList renStudents={students && sortedStudents && filteredStudents}
                  onViewStudent={handleViewStudent}
                  onEditStudent={handleEditStudent}
                  onDeleteStudent={handleDeleteStudent} />
              </div>
              {/* <div className="col-md-5 col-12 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form" > */}
              <div className={`col-12 col-md-5 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form ${
                isForm === true ? "show" : ""
              }`} >
                  <StudentForm renderActionName={actionName} 
                  onClose={handleCloseForm}
                  renderSelectStudent={selectedStudent}
                  onSubmit={handleSubmitForm} />
              </div>
          </div>
        </section>
    </section>
  );
}

export default App;
