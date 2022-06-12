import React, { useState } from 'react'

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title')
  const changeTitle = () => {
    if (title === 'Random Title') {
      setTitle('Hello')
    } else {
      setTitle('Random Title')
    }
  }

  return (
    <>
      <h2> {title}</h2>
      <button className='btn' type='button' onClick={changeTitle}>
        {' '}
        change title
      </button>
    </>
  )
}

export default UseStateBasics
