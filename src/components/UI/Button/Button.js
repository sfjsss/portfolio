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

    let output;
    if (props.btnType === 'link') {
        output = <Link smooth to="/#works" className={buttonClass}>{props.children}</Link>
    } 
    else {
        output = <button onClick={props.clicked} className={buttonClass}>{props.children}</button>
    }

    return output;
}

export default button;