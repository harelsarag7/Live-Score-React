import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setNav } from '../../app/mobileNav';
import './NavBar.css'


function NavBar(){
    // const navStatus = useSelector((state: any) => state.mobileNav.toggle)
    let dispatch = useDispatch();

    function clickedNav(){
        dispatch(setNav())
    }
    return(
        <div className='NavBar'>
            <NavLink onClick={clickedNav} to={'/'}>Home</NavLink>
            <NavLink onClick={clickedNav} to={'/News'}>News</NavLink>
            {/* <NavLink to={'/Highlights'}>Highlights</NavLink> */}
            <NavLink onClick={clickedNav} to={'/Table'}>Table</NavLink>
            {/* <NavLink to={'/'}>Build Tournament </NavLink> */}

        </div>
    )
}

export default NavBar;