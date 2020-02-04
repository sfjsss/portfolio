import React from 'react';

import classes from './Footer.module.scss';
import logo from '../../assets/img/logo_colored.png';
import { HashLink as Link } from 'react-router-hash-link';

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
                                <Link smooth to='#skills' className={classes['link']}>Skills</Link>
                            </li>
                            <li className={classes['item']}> 
                                <Link smooth to='#process' className={classes['link']}>Process</Link>
                            </li>
                            <li className={classes['item']}> 
                                <Link smooth to='#works' className={classes['link']}>Works</Link>
                            </li>
                            <li className={classes['item']}> 
                                <Link smooth to='#contact' className={classes['link']}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes['col-1-of-2']}>
                    <p className={classes['description']}>
                        The front end of this website is built with React along with SCSS. The content of this website is dynamically managed by a back-end server built with django. Source code available at <a rel='noopener noreferrer' href='https://github.com/sfjsss' target='_blank' className={classes['link']}>here</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default footer;