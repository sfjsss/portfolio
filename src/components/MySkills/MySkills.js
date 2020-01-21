import React from 'react';

import classes from './MySkills.module.scss';
import Button from '../UI/Button/Button';
import Composition from './Composition/Composition';

const mySkills = () => {
    return (
        <section className={classes['my-skills']}>
            <div className={`${classes['u-center-text']} ${classes['u-margin-bottom-big']}`}>
                <h2 id='skills' className={classes['heading-secondary']}>
                    My Skills
                </h2>
            </div>

            <div className={classes.row}>
                <div className={classes['col-1-of-2']}>
                    <h3 className={`${classes['heading-tertiary']} ${classes['u-margin-bottom-small']}`}>
                        Coding Skills
                    </h3>
                    <p className={classes.paragraph}>
                        <span strong="true">PROGRAMMING LANGUAGES:</span> Python, JavaScript, TypeScript, Java, HTML, CSS
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">FRAMEWORKS:</span> Flask, Django, Node Express, Spring Boot, Angular, React
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">DATABASES:</span> MySQL, SQLite, MongoDB, Firebase
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">LIBRARIES:</span> Bootstrap, jQuery, Chart.js, Socket.io, Axios, Redux, Jest, Enzyme
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">SOFTWARE VERSION CONTROL:</span> Git, Github
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">METHODOLOGIES/CONCEPTS:</span> Test-Driven Development, RestfulAPI, OOP, JSON, AJAX
                    </p>

                    <h3 className={`${classes['heading-tertiary']} ${classes['u-margin-bottom-small']} ${classes['u-margin-top-medium']}`}>
                        UX/UI Skills
                    </h3>
                    <p className={`${classes.paragraph} ${classes['u-margin-bottom-medium']}`}>
                        Heuristic Evaluation, C&C Analysis, Contextual Inquiry, Affinity Mapping, Journey Mapping, Card Sorting, Site Maps, Responsive Design, Sketch, Principle, Wireframing, Usability Testing, Prototyping
                    </p>

                    <Button btnType="link" btnStyle="btn-text">Download my resume &rarr;</Button>
                </div>
                <div className={classes['col-1-of-2']}>
                    <Composition />
                </div>
            </div>
        </section>
    )
}

export default mySkills;