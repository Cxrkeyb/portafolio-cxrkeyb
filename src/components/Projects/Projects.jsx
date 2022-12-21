import React from 'react'
import './Projects.css'

export default function Projects({project}) {
    return (
        <a className='projectContainer flexedContainer verticalflex' href={project.url} target="_blank" rel='noreferrer'>
            <div className='flexedContainer '>
                <img className='projectImage' src={project.img} alt={`${project.title}`}/>
            </div>
             <div className='projectBottom flexedContainer'>
                 <span className='projectTitle'>{project.title}</span>
             </div>
         </a>
        
    )
}
