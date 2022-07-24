import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <section className='app-header'>
      <Link to='/'> <div className='logo'>Revenge For You!!!</div></Link>
      <Link to='/edit'>Add revenge</Link>
    </section>
  )
}
