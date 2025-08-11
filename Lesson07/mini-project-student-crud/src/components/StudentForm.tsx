import { on } from "events";
import React, { use, useEffect, useState } from "react";
import IStudent from "../IStudent";
interface StudentFormProps {  // Define any props if needed
  renderActionName: string;
  onClose: () => void;
  renderSelectStudent: IStudent | null;
  onSubmit: (student: IStudent | null) => void;
}
export default function StudentForm({renderActionName, onClose, renderSelectStudent, onSubmit}: StudentFormProps) {
  //Quản lí trạng thái dữ liệu trên form
  const [form,setForm] = useState<IStudent|null>({
    studentId: "",
    studentName: "",
    studentAge: 0,
    gender: true,
    birthDay: new Date(),
    address: "",
    isActive: true
  });
  useEffect(() =>{
    if (renderSelectStudent) {
      setForm(renderSelectStudent);
    } else {
      setForm({
        studentId: "",
        studentName: "",
        studentAge: 0,
        gender: true,
        birthDay: new Date(),
        address: "",
        isActive: true
      });
    }
  }, [renderSelectStudent]);
  //Sự kiện close / submit form
  const handleSubmitAndClose = (e: React.FormEvent<HTMLFormElement>) => {
    onClose();
    onSubmit(form);
    e.preventDefault();
  }
  const isViewMode = renderActionName === "View" ;
  return (
    <form action="" method="post" className="py-2" onSubmit={handleSubmitAndClose}>
      <h3>Thông tin sinh viên</h3>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="id">
          Mã sinh viên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          id="studentId"
          name="studentId"
          disabled={isViewMode}
          value={form?.studentId || ""}
          onChange={(e) => {form && setForm({...form, studentId: e.target.value})}}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">
          Họ và tên
        </span>
        <input
          type="text"
          className="form-control rounded-0"
          id="studentName"
          name="studentName"
          disabled={isViewMode}
          value={form?.studentName || ""}
          onChange={(e) => {form && setForm({...form, studentName: e.target.value})}}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="age">
          Tuổi
        </span>
        <input type="number" className="form-control rounded-0"
        id="studentAge"
          name="studentAge"
          disabled={isViewMode}
          min={0}
          value={form?.studentAge || 0}
          onChange={(e) => {form && setForm({...form, studentAge: parseInt(e.target.value)})}}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="sex">
          Giới tính
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            id="male"
            value="true"
            disabled={isViewMode}
            checked={form?.gender === true}
            onChange={(e) => {form && setForm({...form, gender: e.target.value === "true"})}}
          />{" "}
          <label htmlFor="male">Nam</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="gender"
            value="false"
            disabled={isViewMode}
            checked={form?.gender === false}
            onChange={(e) => {form && setForm({...form, gender: e.target.value === "true"})}}
          />{" "}
          <label htmlFor="female">Nữ</label>
        </div>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="birthday">
          Ngày sinh
        </span>
        <input
          type="date"
          className="form-control rounded-0"
          id="birthDay"
          name="birthDay"
          disabled={isViewMode}
          value={form?.birthDay.toISOString().split("T")[0] || ""}
          onChange={(e) => {form && setForm({...form, birthDay: new Date(e.target.value)})}}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">
          Địa chỉ
        </span>
        <textarea
          name="address"
          id="address"
          className="form-control rounded-0"
          disabled={isViewMode}
          value={form?.address || ""}
          onChange={(e) => {form && setForm({...form, address: e.target.value})}}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="active">
          Trạng thái
        </span>
        <div className="d-flex align-items-center">
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="is-active"
            disabled={isViewMode}
            value="true"
            checked={form?.isActive === true}
            onChange={(e) => {form && setForm({...form, isActive: e.target.value === "true"})}}
          />{" "}
          <label htmlFor="is-active">Active</label>
          <input
            type="radio"
            className="mx-1 ms-3"
            name="isActive"
            id="non-active"
            disabled={isViewMode}
            value="false"
            checked={form?.isActive === false}
            onChange={(e) => {form && setForm({...form, isActive: e.target.value === "true"})}}
          />{" "}
          <label htmlFor="non-active">Non-Active</label>
        </div>
      </div>
      {/* <button className="btn btn-success rounded-0 mt-2" id="btnSubmit"> */}
      <button className={`btn rounded-0 mt-2
        ${renderActionName === "Add" ? "btn-primary" :
          renderActionName === "Edit" ? "btn-warning" : "btn-success"}`}
        id="btnSubmit">
        {
          renderActionName === "Add" ? "Save" :
          renderActionName === "Edit" ? "Update" : "Close"}
      </button>
    </form>
  );
}
