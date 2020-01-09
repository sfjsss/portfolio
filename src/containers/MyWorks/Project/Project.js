import React from 'react';

import classes from './Project.module.scss';
import Button from '../../../components/UI/Button/Button';

const project = (props) => {
    const picture_style = {
        backgroundImage: `url(${props.information.bgImage})`
    }

    return (
        <div className={classes['project']}>
            <div className={[classes['project__side'], classes['project__side--front']].join(' ')}>
                <div className={classes['project__picture']} style={picture_style}>
                    &nbsp;
                </div>
                <h4 className={classes['project__heading']}>
                    {props.information.projectName}
                </h4>
                <div className={classes['project__details']}>
                    <ul>
                        <li>{props.information.stack[0]}</li>
                        <li>{props.information.stack[1]}</li>
                        <li>{props.information.stack[2]}</li>
                        <li>{props.information.stack[3]}</li>
                    </ul>
                </div>
            </div>
            <div className={[classes['project__side'], classes['project__side--back']].join(' ')}>
                <div className={classes['project__intro']}>
                    <p className={classes['project__summary']}>
                        {props.information.summary}
                    </p>
                    <Button btnStyle="btn" color="white" animated>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default project;