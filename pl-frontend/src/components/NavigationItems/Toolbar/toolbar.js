import React from 'react';
import Logo from '../Logo/logo';
import classes from './toolbar.module.css';

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.Logo}><Logo/></div>
            <h1 className={classes.Title}>Premier League</h1>
        </div>
    );
};
export default Toolbar;