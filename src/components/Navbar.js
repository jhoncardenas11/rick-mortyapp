import React from 'react';
import { Link  } from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        return(
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/all-characters">Characters</Link>
            </div>
        )

    }

}

export default Navbar;