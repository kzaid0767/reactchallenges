import React from 'react'

function Button({children, onKeyBoardTap}) {
  return (
    <button onKeyDown={onKeyBoardTap}>
        {children}
    </button>
  )
}

export default Button