import React from 'react'

export default function Func_Hvt_x() {
    const name="Devmaster";
    const user={
        name:"Việt",
        age:20,
        phone:393800331,
        email:"nguyenbaviet2201@gmail.com",
        address:"Hà Nội"
    };
    const info=(u:any)=>{
        return' Họ tên: ' + u.name + ' | '+
         'Tuổi: ' +u.age +' | '+
         ' Số điện thoại:'+ u.phone +' | '+
         ' Email: '+u.email+' | '+
         ' Địa chỉ: '+u.address;
    };
    const sum=(...nums:number[]):number=>{
        return nums.reduce((sum,nums)=>sum+nums,0);
    }
    const original =[user.name,user.age,user.phone];
    const updated = {
        ...user,
        age:21
    };
    const greet=(name:string,tittle?:string):string=>{
        return `Hello ${tittle??"Học viên "}${name}`;
    }
  return (
    <div>
    <h2>Thông tin cá nhân của bạn: {info(user)}</h2>
    <hr />
    <h2>Thông tin mới của bạn: {info(updated)}</h2>
    <hr />
    <h2>Số tín chỉ:{sum(1,3,3,2,3,1,3,2,2,1)}</h2>
    <hr />
    <h2>Xin chào: {greet(user.name)}</h2>
    </div>

  )
}