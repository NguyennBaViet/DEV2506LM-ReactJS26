import React from "react";
import Student from "./Student";
import IStudent from "./IStudent";

type StudentListProps = {
  onEdit: () => void;
};
interface StudentProps{
  student:IStudent[]
}
export default function StudentList({ onEdit, student }: StudentListProps & StudentProps) {
  const elementStudent = student.map((student, index) => {
    return <Student key={index} {...student} />
  })
  return (
    <div className="list">
      <h3>Danh sách sinh viên</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Ngày Sinh</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td className="text-center">1</td>
            <td>SV01</td>
            <td>Nguyễn Văn A</td>
            <td className="text-center">20</td>
            <td className="text-center">Nam</td>
            <td className="text-center">
              <button id="btnView" className="btn btn-success rounded-0" onClick={onEdit}>
                Xem
              </button>
              <button id="btnEdit" className="btn btn-warning rounded-0" onClick={onEdit}>
                Sửa
              </button>
              <button id="btnDel" className="btn btn-danger rounded-0">
                Xóa
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td className="text-center">2</td>
            <td>SV02</td>
            <td>Trần Thị Bình</td>
            <td className="text-center">22</td>
            <td className="text-center">Nữ</td>
            <td className="text-center">
              <button id="btnView" className="btn btn-success rounded-0" onClick={onEdit}>
                Xem
              </button>
              <button id="btnEdit" className="btn btn-warning rounded-0" onClick={onEdit}>
                Sửa
              </button>
              <button id="btnDel" className="btn btn-danger rounded-0">
                Xóa
              </button>
            </td>
          </tr>
          {elementStudent}
        </tbody>
      </table>
    </div>
  );
}