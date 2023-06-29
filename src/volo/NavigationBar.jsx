import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <NavLink className='navStyleYour' style={({isActive})=>({
        color: isActive ? 'black' : '#4b4f4c'})} to={"/Your"}>Your</NavLink>
      <NavLink className='navStyleALL'  style={({isActive})=>({
        color: isActive ? 'black' : '#4b4f4c'})} to={"/"}>All</NavLink>
      <NavLink className='navStyleBlocked'  style={({isActive})=>({
        color: isActive ? 'black' : '#4b4f4c'})} to={"/Blocked"}>Blocked</NavLink>
    </div>
  )
}

export default NavigationBar