import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

const button = (props) => {
    let buttonAnimation = props.animated ? classes['animated'] : null;
    let buttonStyle;
    if (props.style == 'btn') {
        buttonStyle = classes['btn'];
    }
    else if (props.style == 'btn-text') {
        buttonStyle = classes['btn-text'];
    }
    let buttonClass = [buttonStyle, classes[props.color], buttonAnimation].join(' ');

    return (
        <Link to="/#" className={buttonClass}>{props.children}</Link>
    )
}

export default button;