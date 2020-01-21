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
                        <a href='#skills' className={classes['link']} onClick={uncheckbox}>Skills</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#process' className={classes['link']} onClick={uncheckbox}>Process</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#works' className={classes['link']} onClick={uncheckbox}>Works</a>
                    </li>
                    <li className={classes['item']}>
                        <a href='#contact' className={classes['link']} onClick={uncheckbox}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default navigation;