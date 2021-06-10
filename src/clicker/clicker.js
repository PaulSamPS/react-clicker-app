import React, { useState } from 'react'
import './clicker.scss'

const Clicker = () => {
    const [ count, setCount ] = useState(0)

    const increment = () => {
        setCount(count +1)
    }
    const decrement = () => {
        setCount(count -1)
    }

    return(
        <div className='app'>
            <i
                className="material-icons clicker btn"
                onClick={ decrement } >
                remove
            </i>
            <span className='style'>
                { count }
            </span>
            <i
                className="material-icons clicker btn"
                onClick={ increment } >
                add
            </i>
        </div>
    )
}
export default Clicker