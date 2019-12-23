import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {
    let buttonAnimation = props.animated ? classes['animated'] : null;
    let buttonStyle;
    if (props.btnStyle == 'btn') {
        buttonStyle = classes['btn'];
    }
    else if (props.btnStyle == 'btn-text') {
        buttonStyle = classes['btn-text'];
    }
    let buttonClass = [buttonStyle, classes[props.color], buttonAnimation].join(' ');

    return (
        <a href="#mySkill" class={buttonClass}>{props.children}</a>
    )
}

export default button;