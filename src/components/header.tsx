import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"




export const Header = () => {

        const navRef:any = useRef();

        const showNavbar = () => {
            navRef.current.classList.toggle("responsive_nav")
        }

    return (
        <header id="header">
            <div id="header_container">
                <div id="header_name">T.Dias</div>
                <nav ref={navRef}>
                    <a href="#about">About</a>
                    <a href="#tecnologys">Tecnologys</a>
                    <a href="#projects">Projects</a>
                    <a href="#">Contact</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                        <FaTimes/>
                    </button>

                    
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                        <FaBars/>
                    </button>
                    
            </div>
            
        </header>
    )
}