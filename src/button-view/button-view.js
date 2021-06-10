import React, { useState } from 'react'
import Clicker from '../clicker'
import './button-view.scss'

const ButtonView = () => {
    const [ viewClicker, setViewClicker ] = useState( false )
    return(
        <div className='button-view'>
            <h2>Clicker App</h2>
            <a className="btn-floating btn-large pulse"
               onClick={() => setViewClicker(!viewClicker)}>
                <i className="material-icons">
                    exposure
                </i>
            </a>
            { viewClicker && <Clicker /> }
        </div>
    )
}

export default ButtonView