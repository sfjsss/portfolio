import React from 'react';

import classes from './Navigation.module.scss';

const navigation = () => {
    return (
        <div className={classes['navigation']}>
            <input type='checkbox' className={classes['checkbox']} id='navi-toggle' />
            <label htmlFor='navi-toggle' className={classes['button']}>MENU</label>
            <div className={classes['background']}>&nbsp;</div>
            <nav className={classes['nav']}>
                <ul className={classes['list']}>
                    <li className={classes['item']}>
                        <a href='#' className={classes['link']}>Skills</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#' className={classes['link']}>Process</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#myWorks' className={classes['link']}>Works</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#' className={classes['link']}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default navigation;