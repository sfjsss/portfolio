import React from 'react';

import classes from './Footer.module.scss';
import logo from '../../assets/img/logo_colored.png';

const footer = () => {
    return (
        <footer className={classes['footer']}>
            <div className={classes['logo-box']}>
                <img src={logo} alt='logo' className={classes['logo']} />
            </div>
            <div className={classes['row']}>
                <div className={classes['col-1-of-2']}>
                    <div className={classes['navigation']}>
                        <ul className={classes['list']}>
                            <li className={classes['item']}> 
                                <a href='#' className={classes['link']}>Skills</a>
                            </li>
                            <li className={classes['item']}> 
                                <a href='#' className={classes['link']}>Process</a>
                            </li>
                            <li className={classes['item']}> 
                                <a href='#' className={classes['link']}>Works</a>
                            </li>
                            <li className={classes['item']}> 
                                <a href='#' className={classes['link']}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes['col-1-of-2']}>
                    <p className={classes['description']}>
                        The front end of this website is built with React along with SCSS. The content of this website is dynamically managed by a back-end server built with django. Source code available at <a href='#' className={classes['link']}>here</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default footer;