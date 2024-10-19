import './Header.css';
import { useState,useEffect } from 'react';

function Header(){

    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function() {
            if(window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    })

    return(

        <nav className = {scrolled ? "NavBar-Scrolled": "NavBar-NotScrolled"}>
            hello
        </nav>
    );
}

export default Header;