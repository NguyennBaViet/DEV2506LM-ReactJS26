import React from "react";
import Student from "./Student";
import IStudent from "../IStudent";
import { on } from "events";
interface StudentListProps {
  renStudents: IStudent[];
  onViewStudent:(student: IStudent) => void;
  onEditStudent?: (student: IStudent) => void;
  onDeleteStudent: (student: IStudent) => void;
}
export default function StudentList({ renStudents,onViewStudent,onEditStudent,onDeleteStudent }: StudentListProps) {
  let studentElements = renStudents.map((student,index) => {
    return (
      <Student
      key = {student.studentId} index = {index + 1}
      renStudent = {student}
      // on ...
      onView={onViewStudent}
      onEdit={onEditStudent ? onEditStudent : () => {}}
      onDelete={() => onDeleteStudent(student)}
      />
    );
  });
  return (
    <div className="list ">
      <h3>Danh sách sinh viên</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {studentElements}
        </tbody>
      </table>
    </div>
  );
}
