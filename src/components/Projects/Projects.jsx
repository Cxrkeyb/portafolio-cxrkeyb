import React from 'react'
import './Projects.css'

export default function Projects({project}) {
    return (
        <a className='projectContainer flexedContainer verticalflex' href={project.url}>
            <div className='flexedContainer '>
                <img className='projectImage' src={project.img} alt={`image of ${project.title}`}/>
            </div>
             <div className='projectBottom flexedContainer'>
                 <span className='projectTitle'>{project.title}</span>
             </div>
         </a>
        
    )
}
