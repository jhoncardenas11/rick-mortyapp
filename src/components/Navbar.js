import React from 'react';
import { Link  } from 'react-router-dom';

// styles
import './styles/Navbar.scss';

// media
import logo from '../media/images/logo.png';

class Navbar extends React.Component {

    render() {

        return(
            <div className="navbar">
                <img src={logo} alt="nav logo"/>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/all-characters">Characters</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }

}

export default Navbar;