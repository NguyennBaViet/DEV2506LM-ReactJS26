import React from "react";
interface ControlProps {
  //event
  onAdd: () => void;
  onSortChange: (sortOrder: "asc" | "desc") => void;
  onSearchChange: (keyword: string) => void;
}
export default function Control({ onAdd,onSortChange,onSearchChange }: ControlProps) {
  //Hàm xử lí sự kiện thêm mới 
  const handleAdd = () => {
    onAdd();
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value as "asc" | "desc");
  };
  return (
    <div className=" row search  my-2 align-items-center justify-content-between py-2 ">
      <div className="col-sm-6 col-12">
        <form className="d-flex flex-nowrap me-2" role="search">
          <input
            className="form-control me-2 rounded-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => onSearchChange(e.target.value)}
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
      <div className="col-sm-3 col-6 mt-2 mt-sm-0 d-flex align-items-center ">
        <select className="form-control rounded-0" onChange={handleSortChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <div className="col-sm-3 col-6 mt-2  mt-sm-0 text-end">
        <button id="btnAdd" type="button" className="btn btn-primary rounded-0" onClick={handleAdd} >
          Thêm mới sinh viên
        </button>
      </div>
    </div>
  );
}
