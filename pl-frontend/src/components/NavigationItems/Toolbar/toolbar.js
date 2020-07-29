import React from 'react';
import Logo from '../Logo/logo';
import classes from './toolbar.module.css';
import Standings from '../../Standings/standings';

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoTitleContainer}>
                <div className={classes.Logo}><Logo /></div>
                <p className={classes.Title}>Premier League</p>
            </div>
            <div className={classes.Standings}><Standings /></div>
        </div>
    );
};
export default Toolbar;