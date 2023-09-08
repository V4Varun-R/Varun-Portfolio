import React from 'react'
import './Button.scss'
export default function Button(props) {
  return (
    <div>
        <button className="btn-style">{props.name}</button></div>
  )
}
