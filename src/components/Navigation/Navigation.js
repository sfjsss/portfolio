import React from 'react';

import classes from './Navigation.module.scss';

const navigation = () => {
    const uncheckbox = () => {
        document.getElementById('navi-toggle').checked = false;
    }

    return (
        <div className={classes['navigation']}>
            <input type='checkbox' className={classes['checkbox']} id='navi-toggle' />
            <label htmlFor='navi-toggle' className={classes['button']}>
                <span className={classes['icon']}>&nbsp;</span>
            </label>
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
                        <a href='#myWorks' className={classes['link']} onClick={uncheckbox}>Works</a>
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