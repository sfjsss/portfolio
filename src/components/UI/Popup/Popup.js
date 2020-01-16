import React from 'react'

import classes from './Popup.module.scss';
import Button from '../Button/Button';

const popup = (props) => {
    return (
        <div className={classes['popup']}>
            <div className={classes['content']}>
                <h2 className={[classes['heading-secondary'], classes['u-margin-bottom-small']].join(' ')}>Message sent</h2>
                <p className={classes['text']}>
                    You have successfully sent your message. I will get back to you as soon as possible.
                </p>
                <Button clicked={props.closePopup} btnType="button" btnStyle="btn" color="primary">OK</Button>
            </div>
        </div>
    )
}

export default popup