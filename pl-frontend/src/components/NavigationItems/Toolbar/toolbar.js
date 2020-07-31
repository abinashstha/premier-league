import React from 'react';
import Logo from '../Logo/logo';
import classes from './toolbar.module.css';
import Search from '../../Search/search';

const Toolbar = (props) => {
    const { leagueTitle } = props;

    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoTitleContainer}>
                <div className={classes.Logo}><Logo /></div>
                <p className={classes.Title}>{leagueTitle}</p>
            </div>
            <div className={classes.Search}>
                <Search {...props} />
            </div>
        </div>
    );
};
export default Toolbar;