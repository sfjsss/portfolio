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
        ],
        uxProjects: [
            
        ],
        projectsType: "coding"
    }

    selectUXHandler = () => {
        this.setState({projectsType: "UX"});
    }

    selectCodingHandler = () => {
        this.setState({projectsType: "coding"});
    }

    render() {
        let codingProjectsClass;
        let uxProjectsClass;
        if (this.state.projectsType == "coding") {
            codingProjectsClass = classes['heading-secondary']
            uxProjectsClass = classes['heading-secondary--deactivated']
        }
        else {
            codingProjectsClass = classes['heading-secondary--deactivated']
            uxProjectsClass = classes['heading-secondary']
        }

        let displayedCodingProjects = this.state.codingProjects.map(project => {
            return <Project information={project} />
        })

        return (
            <section className={classes['my-works']}>
                <div className={`${classes['u-center-text']} ${classes['u-margin-bottom-big']}`}>
                    <h2 id="myWorks" onClick={this.selectCodingHandler} className={codingProjectsClass}>
                        Coding Projects
                    </h2>
                    <h2 className={`${classes['heading-secondary--deactivated']} ${classes['u-margin-sides-medium']}`}>
                        /
                    </h2>
                    <h2 onClick={this.selectUXHandler} className={uxProjectsClass}>
                        UX Designs
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