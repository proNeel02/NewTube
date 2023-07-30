import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='px-3 py-1 m-2 bg-gray-200 rounded-lg hover:bg-gray-300'>{title}</button>
    </div>
  )
}

export default Button