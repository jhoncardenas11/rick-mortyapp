import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './styles/Home.scss';

// media
import homeLogo from '../media/images/homeLogo.png';

class Home extends React.Component {

    render() {

        return(
            <div className="home">
                <img src={homeLogo} alt="main logo"/>
                <h1>Welcome to <br/> Rick and Morty app</h1>
                <h2>To start please click in the next button</h2>
                <div className="button">
                    <Link className="link" to="/all-characters">start</Link>
                </div>
                <p>This app was made with React JS</p>
            </div>
        )

    }

}

export default Home;