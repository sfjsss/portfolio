import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let buttonClass = [classes.Button, classes[props.color]].join(' ');

    return (
        <a href="#"className={buttonClass}>{props.children}</a>
    )
}

export default button;