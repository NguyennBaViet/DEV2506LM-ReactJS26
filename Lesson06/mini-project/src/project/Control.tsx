import React from "react";

type ControlProps = {
  onAdd: () => void;
};
export default function Control({ onAdd }: ControlProps) {
  return (
    <div className="row search my-2 align-items-center justify-content-between py-2">
      <div className="col-sm-6 col-12">
        <form className="d-flex flex-nowrap me-2" role="search">
          <input
            className="form-control me-2 rounded-0 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success rounded-0 "
            type="submit"
            id="btnSearch"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="col-sm-3 col-6 mt-2 mt-sm-0 d-flex align-items-center">
        <select className="form-control rounded-0">
          <option value="">Sắp xếp</option>
          <option value="">ABC def</option>
          <option value="">ABC def</option>
        </select>
      </div>
      <div className="col-sm-3 col-6 mt-2 mt-sm-0 text-center">
        <button
          id="btnAdd"
          type="button"
          className="btn btn-primary rounded-0"
          onClick={onAdd}
        >
          Thêm mới sinh viên
        </button>
      </div>
    </div>
  );
}