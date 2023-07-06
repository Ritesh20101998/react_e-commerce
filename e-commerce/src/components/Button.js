import React from 'react'

function Button({onClickhandler, value, title}) {
  return (
    <button onClick={onClickhandler} value={value} className='btns'>
        {title}
    </button>
  )
}

export default Button;