import React , {Fragment}from 'react'
import FooterHeader from '../../components/FooterHeader/FooterHeader'
import avatar from '../../assets/icons/avatar.svg'
import './Header.css'


export default function Header() {
    return (
        <Fragment>
            <div className='headerContainer'>
                <div className='flexedContainer'>
                    <img className='avatar' src={avatar}/>
                </div>
                <div className='flexedContainer verticalflex'>
                    <span className='titleIntroduction'>Front end developer </span>
                    <span className='textIntroduction'>I am dedicated to the development of web pages.</span>
                </div>
            </div>
            <FooterHeader />
        </Fragment>
        
    )
}
