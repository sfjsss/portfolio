import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {
    let buttonAnimation = props.animated ? classes.Animated : null;
    let buttonClass = [classes.Button, classes[props.color], buttonAnimation].join(' ');

    return (
        <a href="#"className={buttonClass}>{props.children}</a>
    )
}

export default button;