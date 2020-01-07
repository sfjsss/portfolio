import React, { Component } from 'react';

import classes from './MyWorks.module.scss';
import Project from './Project/Project';

class MyWorks extends Component {
    state = {
        codingProjects: [
            {
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/job_search_tracker.png",
                projectName: "Job Search Tracker",
                stack: ["Java", "Spring Boot", "JSP", "MySQL"],
                summary: "A web app that helps users track and analyze their job searching progress."
            },
            {
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/trivia_warrior.png",
                projectName: "Trivia Warrior",
                stack: ["JavaScript", "Node Express", "Angular", "Socket.io"],
                summary: "A real-time multiplayer trivia game where players can select their own question categories."
            },
            {
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/caloriePedia.png",
                projectName: "CaloriePedia",
                stack: ["Python", "Django", "YelpAPI", "MySQL"],
                summary: "A web app that helps users track their daily calorie intake along with their body fat percent and weight."
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