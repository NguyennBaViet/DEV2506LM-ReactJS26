import React, { useContext } from 'react'
import { ThemeContext } from './ExampleContext'
export default function ExampleInfo() {
    const theme = useContext(ThemeContext)
  return (
    <div>
        <h2>ExampleInfo</h2>
        <p className={theme}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam commodi quasi error veritatis, mollitia aperiam? Numquam aliquid quae cupiditate doloremque consectetur neque, eligendi maxime culpa voluptatum velit molestiae laborum delectus.</p>
    </div>
  )
}
