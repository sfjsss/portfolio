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
                        <span strong="true">PROGRAMMING LANGUAGES:</span> Java, JavaScript, TypeScript, HTML, CSS, SCSS
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">FRAMEWORKS:</span> Angular, React, React-Native, Spring, J2EE, Hibernate, Kafka
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">DATABASES:</span> MySQL, SQLite, PostgreSQL
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">LIBRARIES:</span> Bootstrap, React Bootstrap, Angular Material, jQuery, Socket.io, Redux, NgRx, Junit, Mockito
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">DEVOPS:</span> Git, Github, Jenkins, AWS, Docker, Linux, Tomcat
                    </p>
                    <p className={classes.paragraph}>
                        <span strong="true">METHODOLOGIES/CONCEPTS:</span> Test-Driven Development, REST, SOAP, OOP, Service Oriented Architect, Microservices
                    </p>

                    <h3 className={`${classes['heading-tertiary']} ${classes['u-margin-bottom-small']} ${classes['u-margin-top-medium']}`}>
                        UX/UI Skills
                    </h3>
                    <p className={`${classes.paragraph} ${classes['u-margin-bottom-small']}`}>
                        Heuristic Evaluation, C&C Analysis, Contextual Inquiry, Affinity Mapping, Journey Mapping, Card Sorting, Site Maps, Responsive Design, Sketch, Principle, Wireframing, Usability Testing, Prototyping
                    </p>

                    <Button btnType="anchor" pageLink="https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/Tianyu+Li+Resume.pdf" btnStyle="btn-text">Download my resume &rarr;</Button>
                </div>
                <div className={classes['col-1-of-2']}>
                    <Composition />
                </div>
            </div>
        </section>
    )
}

export default mySkills;