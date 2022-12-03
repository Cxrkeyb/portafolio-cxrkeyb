import React, { Fragment } from 'react'
import './Works.css'
import {projectsdb, projectscollab} from '../../services/projectsdb.jsx'
import Projects from '../../components/Projects/Projects.jsx'
import TitleFlexed from '../../components/TitleFlexed/TitleFlexed'

export default function Works() {
    return (
        <Fragment>
           <TitleFlexed title="My Projects" />
            <div className='worksContainer' id='projectsContent'>
                {projectsdb.map((project) => <Projects key={project.title} project={project}/>)}
            </div>
            <TitleFlexed title="Collab Work" />
            <div className='collabContainer flexedContainer'>
                {projectscollab.map((project) => <Projects key={project.title} project={project}/>)}
            </div>
        </Fragment>
        
    )
}