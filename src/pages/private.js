import React from 'react'
import { Link } from 'react-router-dom'
import HeaderOne from '../components/headerOne'
import { LOGOUT } from '../routes/path'

export const PrivatePage = () => {
  return (
    <div> <HeaderOne/> <h1>PRIVATE </h1>
      <Link to={LOGOUT}>LOGOUT</Link>
    </div>
  )
}
