import React from 'react';
import Logo from '../Logo/logo';
import classes from './toolbar.module.css';
import Search from '../../Search/search';

const Toolbar = (props) => {
    const { leagueTableList } = props;
    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoTitleContainer}>
                <div className={classes.Logo}><Logo /></div>
                <p className={classes.Title}>{leagueTableList ? leagueTableList.name : null}</p>
            </div>
            <div className={classes.Search}><Search year={props.year} yearChangedHandler = {props.yearChangedHandler}/></div>
        </div>
    );
};
export default Toolbar;