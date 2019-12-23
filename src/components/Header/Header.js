import React from 'react';

import classes from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import Button from '../UI/Button/Button';

const header = () => {
    return (
        <header className={classes.header}>
            <div className={classes['logo-container']}>
                <img src={logo} alt="logo" className={classes.logo} />
            </div>

            <div className={classes['text-box']}>
                <h1 className={classes['heading-primary']}>
                    <span className={classes['heading-primary--main']}>Hi, I'm Tianyu Li</span>
                    <span className={classes['heading-primary--sub']}>I'm a full-stack developer and a UX designer</span>
                </h1>

                <Button btnStyle="btn" color="white" animated>Check out my works</Button>
            </div>

            
        </header>
    )
}

export default header;