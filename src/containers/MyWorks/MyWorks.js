import React, { Component } from 'react';

import classes from './MyWorks.module.scss';
import Project from './Project/Project';

class MyWorks extends Component {
    state = {
        codingProjects: [
            {
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/job_search_tracker.png",
                projectName: "Job Search Tracker",
                stack: ["Java", "Spring Boot", "JSP", "MySQL"]
            }
        ]
    }

    render() {
        let displayedCodingProjects = this.state.codingProjects.map(project => {
            return <Project information={project} />
        })
        return (
            <section className={classes['my-works']}>
                <div className={`${classes['u-center-text']} ${classes['u-margin-bottom-big']}`}>
                    <h2 id="my-works" className={classes['heading-secondary']}>
                        Coding Projects
                    </h2>
                </div>

                <div className={classes['projects']}>
                    {displayedCodingProjects}
                </div>
            </section>
        )
    }
}

export default MyWorks;