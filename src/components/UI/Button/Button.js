import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import classes from './Button.module.scss';

const button = (props) => {
    let buttonAnimation = props.animated ? classes['animated'] : null;
    let buttonStyle;
    if (props.btnStyle === 'btn') {
        buttonStyle = classes['btn'];
    }
    else if (props.btnStyle === 'btn-text') {
        buttonStyle = classes['btn-text'];
    }
    let buttonClass = [buttonStyle, classes[props.color], buttonAnimation].join(' ');

    return (
        <Link smooth to="/#myWorks" className={buttonClass}>{props.children}</Link>
    )
}

export default button;