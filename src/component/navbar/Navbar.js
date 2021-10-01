import React from 'react';
import './Navbar.css';

const Navbar = ({isScrolling}) => {

    const tothetop = () =>{
        window.scrollTo( {top: 0 ,left: 0, behavior: "smooth"});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling": null}`}>   
            <div className="navbar-logo" onClick={tothetop} >FabCop</div>
        </nav>
    )
}

export default Navbar
