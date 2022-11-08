import { NavLink } from 'react-router-dom';
import './NavBar.css'


function NavBar(){
    return(
        <div className='NavBar'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/News'}>News</NavLink>
            <NavLink to={'/Highlights'}>Highlights</NavLink>
            <NavLink to={'/Table'}>Table</NavLink>
        </div>
    )
}

export default NavBar;