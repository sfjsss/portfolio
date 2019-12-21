import React from 'react';

import classes from './Header.module.css';
import logo from '../../assets/img/logo.png';

const header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.LogoContainer}>
                <img src={logo} alt="logo" className={classes.Logo} />
            </div>

            <div className={classes.TextBox}>
                <h1 className={classes.HeadingPrimary}>
                    <span className={classes.HeadingPrimaryMain}>Hi, I'm Tianyu Li</span>
                    <span className={classes.HeadingPrimarySub}>I'm a full-stack developer and a UX designer</span>
                </h1>
            </div>

            
        </header>
    )
}

export default header;