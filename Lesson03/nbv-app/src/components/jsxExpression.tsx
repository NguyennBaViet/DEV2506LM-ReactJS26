import React from 'react'
import { forEachChild } from 'typescript';

export default function () {
    const name="Devmaster";
    const user={
        name:"Việt",
        age:20
    }
    //hàm
    const formatName =(u:any)=>{
        return u.name + ': '+u.age;
    }
    //element
    const element = (
        <div className='alert alert-danger'>
            <h2>Xin chào,{name}</h2>
            <h3>Welcome,{formatName(user)}</h3>
        </div>
    )
    //hàm có: rest parameter
    const sum =(...nums:number[]):number=>{
        //let tong:number=0;
    //    for(let i = 0; i<nums.length;i++){
    //        tong +=nums[i];
    //    }
    //    return tong;
    return nums.reduce((sum,nums)=>sum+nums,0)
}
  return (
    <div>
        <h2>Jsc Expression</h2>
        <p>Xin chào:{name}</p>
        <p>Họ tên: {user.name} - Tuổi của bạn:{user.age}</p>
        <p>Gọi hàm: {formatName(user)}</p>
        {element}
        <hr/>
        <p>Kết quả: {sum(11,22)}</p>
        <p>Kết quả: {sum(1,5,9,6)}</p>
    </div>
  )
}
