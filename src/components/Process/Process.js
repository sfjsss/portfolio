import React from 'react';

import classes from './Process.module.scss';
import research_icon from '../../assets/img/process_icons/research.svg';

const process = () => {
    return (
        <section className={classes.process}>

            <div className={classes.row}>
                <div className={classes['col-1-of-4']}>
                    <div className={classes['process-box']}>
                        <img src={research_icon} className={classes['process-box__icon']}/>
                        <h3 className={[classes['heading-tertiary'], classes['u-margin-bottom-small']].join(' ')}>Research</h3>
                        <p className={classes['process-box__text']}>For each of my projects, I always conduct a research before the actual coding. It helps me better understanding my client and their goal.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default process;