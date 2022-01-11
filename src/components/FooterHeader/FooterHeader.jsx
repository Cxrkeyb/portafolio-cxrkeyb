import React from 'react'
import coder from '../../assets/icons/coder.png'
import './FooterHeader.css'

export default function FooterHeader() {
    return (
        <div className='flexedContainer'>
            <img className='iconHeader' src={coder} alt="icon coder"/>
        </div>
    )
}
