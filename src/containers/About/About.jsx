import React from 'react'
import './About.css'

export default function About() {
    return (
        <div id='aboutContent' className='aboutContainer flexedContainer verticalflex'>
            <span className='aboutTitle'>Hi I'm Wilson Parada. Nice to meet you.</span>
            <span className='aboutDescription'>I started in 2020 autonomously over time I decided to innovate my studies with certified courses such as at Coderhouse, I managed to study different courses until today, such as:</span>
            <ul className='aboutList'>
                <li>Web development</li>
                <li>Javascript</li>
                <li>React Js</li>
            </ul>
        </div>
    )
}
