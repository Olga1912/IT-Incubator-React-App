import React from 'react';
import { Button } from 'reactstrap';

const Header = () => {
    return (
        <header className="header">
            <Button color="primary">primary</Button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="logo image"/>
        </header>
    )
}

export default Header;