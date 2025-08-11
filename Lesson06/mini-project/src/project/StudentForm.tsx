import React from "react";

export default function StudentForm() {
  return (
    <form action="" method="post" className="py-2">
      <h3>Thông tin sinh viên</h3>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="id">Mã sinh viên</span>
        <input type="text" className="form-control rounded-0" aria-describedby="id" />
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="name">Họ và tên</span>
        <input type="text" className="form-control rounded-0" aria-describedby="name" />
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="age">Tuổi</span>
        <input type="number" className="form-control rounded-0" />
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="sex">Giới tính</span>
        <div className="d-flex align-items-center">
          <input type="radio" className="mx-1 ms-3" name="gender" id="male" defaultChecked />
          <label htmlFor="male">Nam</label>
          <input type="radio" className="mx-1 ms-3" name="gender" id="female" />
          <label htmlFor="female">Nữ</label>
          <input type="radio" className="mx-1 ms-3" name="gender" id="none" />
          <label htmlFor="none">Khác</label>
        </div>
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="birthday">Ngày sinh</span>
        <input type="date" className="form-control rounded-0" aria-describedby="birthday" />
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="address-label">Địa chỉ</span>
        <textarea
          name="address"
          id="address"
          className="form-control rounded-0"
          defaultValue=""
          aria-labelledby="address-label"
        />
      </div>

      <div className="input-group mb-2">
        <span className="input-group-text rounded-0" id="active">Trạng thái</span>
        <div className="d-flex align-items-center">
          <input type="radio" className="mx-1 ms-3" name="isActive" id="is-active" defaultChecked />
          <label htmlFor="is-active">Active</label>
          <input type="radio" className="mx-1 ms-3" name="isActive" id="non-active" />
          <label htmlFor="non-active">Non-Active</label>
        </div>
      </div>

      <button className="btn btn-success rounded-0 mt-2" id="btnSubmit">
        Save
      </button>
    </form>
  );
}