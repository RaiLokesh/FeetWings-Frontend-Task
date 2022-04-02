import React from 'react'
import './Navbar.css'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-indivleft'>
                <img height="70px" src="https://blogger.googleusercontent.com/img/a/AVvXsEjUw08RR_z6neNnrTSY1CYJ4AJR6oRpXJ46CiA8Nu8GRYUSO6rTKhZs8nHP731R6p_eNxVnqFBH81FMNXjhvxTeG6WAIyBt3-M3DmGL-MO8Tod7QYfd8qIwH-oYCAE5ti1Rzw0c9Y6d1vE9_TiRVGIFbg7lCluuIn7hGBycwNADJIZV1jNXFCbmbRGf=w400-h225" />
            </div>
            <div className='nav-indivright'>
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar