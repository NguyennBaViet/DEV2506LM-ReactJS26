import React, { useEffect } from 'react'

export default function Bai6() {
    useEffect (() =>{
        const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) =>{
            event.preventDefault();
            event.returnValue = "Bạn có chắc muốn rời khỏi trang không ?"
        };
        window.addEventListener("beforeunload",handleBeforeUnload)
        return () => {
            window.removeEventListener("beforeunload",handleBeforeUnload)
        };
    },[])
  return (
    <div>
        <h2>Trang web sẽ cảnh báo nếu rời đi</h2>
    </div>
  )
}
