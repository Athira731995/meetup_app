import React from 'react'
import { Link ,Router} from 'react-router-dom'
import './MainNavigation.css'
export const MainNavigations = () => {
    return (
        <>

        <ul className='heading'>
            <li>
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                <Link to="/add-meetup">New Meetup</Link>
            </li>
            <li>
                <Link to="/favorite">Favorites</Link>
            </li>
        </ul>

        </>

    )
}
