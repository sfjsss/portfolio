import React from 'react';

import classes from './Project.module.scss';

const project = (props) => {
    return (
        <div className={classes['project']}>
            <div className={[classes['project__side'], classes['project__side--front']].join(' ')}>
                {props.information}
            </div>
            <div className={[classes['project__side'], classes['project__side--back']].join(' ')}>
                back of the card
            </div>
        </div>
    )
}

export default project;