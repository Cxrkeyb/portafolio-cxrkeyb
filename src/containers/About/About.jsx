import React from 'react'
import './About.css'

export default function About() {
    return (
        <div id='aboutContent' className='aboutContainer flexedContainer verticalflex'>
            <span className='aboutTitle'>Hi I'm Wilson Parada. Nice to meet you.</span>
            <span className='aboutDescription'>I started in 2020 autonomously over time I decided to innovate my studies with certified courses such as at Coderhouse, I managed to study different courses until today, such as:</span>
            <div className='aboutList'>
                <div className='aboutAbilities'>HTML5</div>
                <div className='aboutAbilities'>CSS3</div>
                <div className='aboutAbilities'>Javascript</div>
                <div className='aboutAbilities'>React Js</div>
                <div className='aboutAbilities'>Node Js</div>
            </div>
        </div>
    )
}
