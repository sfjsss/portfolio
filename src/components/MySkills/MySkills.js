import React from 'react';

import classes from './MySkills.module.scss';

const mySkills = () => {
    return (
        <section className={classes['my-skills']}>
            <div className={`${classes['u-center-text']} ${classes['u-margin-bottom-8']}`}>
                <h2 className={classes['heading-secondary']}>
                    My Skills
                </h2>
            </div>

            <div className={classes.row}>
                <div className={classes["col-1-of-2"]}>
                    text-content
                </div>
                <div className={classes["col-1-of-2"]}>
                    image-content
                </div>
            </div>
        </section>
    )
}

export default mySkills;