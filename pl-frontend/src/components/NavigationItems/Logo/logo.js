import React from 'react';
import classes from './logo.module.css';
import plLogo from '../../../assets/images/logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={plLogo} alt ="Premier League" />
        </div>
    );
}

export default logo;