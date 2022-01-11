import React from 'react'
import './TitleFlexed.css'

export default function TitleFlexed({title}) {
    return (
        <div className='flexedContainer'>
            <span className='titleFlexed'>{title}</span>
        </div>
    )
}
