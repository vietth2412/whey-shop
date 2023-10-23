import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';


const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark")
    };

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light")
    };
    setDarkMode();
    // const toggleTheme = (e:any) => {
    //     if (e.target.checked) setDarkMode();
    //     else setLightMode();
    // }

    return(
        <div className="dark_mode">
            <input type="checkbox" 
                className="dark_mode_input"
                    id="darkMode-toggle"
                    // onChange={toggleTheme}
            >
            </input>
            <label className="dark_mode_label" htmlFor='darkMode-toggle'>
                <FontAwesomeIcon icon={faSun} className="sun-icon" />
                <FontAwesomeIcon icon={faMoon} className="moon-icon" />
            </label>
        </div>
    )
}

export default DarkMode;