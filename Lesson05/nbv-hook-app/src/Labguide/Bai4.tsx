import React, { useEffect, useRef, useState } from 'react'

export default function Bai4() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue,setInputValue] = useState("")
    const prevValue = useRef("")
    useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, []);
    useEffect(() =>{
        prevValue.current = inputValue
    },[inputValue])
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>Giá trị trước đó: {prevValue.current}</p>
    </div>
  )
}
