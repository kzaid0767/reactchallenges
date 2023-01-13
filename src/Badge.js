import React, { Children } from 'react'

function Badge({children, color, ...props}) {
    return (
        <span className={`${color} badge`} {...props}>{children}</span>
    )
}

export default Badge