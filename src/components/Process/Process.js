import React from 'react';

import classes from './Process.module.scss';
import design_icon from '../../assets/img/process_icons/design.svg';
import research_icon from '../../assets/img/process_icons/research.svg';
import develop_icon from '../../assets/img/process_icons/develop.svg';
import testing_icon from '../../assets/img/process_icons/testing.svg';

const process = () => {
    return (
        <section id='process' className={classes.process}>

            <div className={classes.row}>
                <div className={classes['col-1-of-4']}>
                    <div className={classes['process-box']}>
                        <img src={research_icon} className={classes['process-box__icon']} alt="process_icon"/>
                        <h3 className={[classes['heading-tertiary'], classes['u-margin-bottom-small']].join(' ')}>Research</h3>
                        <p className={classes['process-box__text']}>For each of my projects, I always conduct a research before the actual coding. It helps me better understanding my client and their goal.</p>
                    </div>
                </div>

                <div className={classes['col-1-of-4']}>
                    <div className={classes['process-box']}>
                        <img src={design_icon} className={classes['process-box__icon']} alt="process_icon"/>
                        <h3 className={[classes['heading-tertiary'], classes['u-margin-bottom-small']].join(' ')}>Design</h3>
                        <p className={classes['process-box__text']}>Based on my research, I would translate my design into a prototype. I then communicate with the client through the prototype and collect feedback.</p>
                    </div>
                </div>

                <div className={classes['col-1-of-4']}>
                    <div className={classes['process-box']}>
                        <img src={develop_icon} className={classes['process-box__icon']} alt="process_icon"/>
                        <h3 className={[classes['heading-tertiary'], classes['u-margin-bottom-small']].join(' ')}>Develop</h3>
                        <p className={classes['process-box__text']}>Using my improved prototype as a guideline, I would conduct a system design regarding what frameworks and tools to use and then code the project.</p>
                    </div>
                </div>

                <div className={classes['col-1-of-4']}>
                    <div className={classes['process-box']}>
                        <img src={testing_icon} className={classes['process-box__icon']} alt="process_icon"/>
                        <h3 className={[classes['heading-tertiary'], classes['u-margin-bottom-small']].join(' ')}>Testing</h3>
                        <p className={classes['process-box__text']}>After the first build of the project, I usually invite the client for a beta test. I will then improve the project based on the test result and feedback.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default process;