import React, { Component } from 'react';

import classes from './MyWorks.module.scss';
import Project from './Project/Project';

class MyWorks extends Component {
    state = {
        codingProjects: [
            {
                id: "code01",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/job_search_tracker.png",
                projectName: "Job Search Tracker",
                stack: ["Java", "Spring Boot", "JSP", "MySQL"],
                summary: "A web app that helps users track and analyze their job searching progress."
            },
            {
                id: "code02",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/trivia_warrior.png",
                projectName: "Trivia Warrior",
                stack: ["JavaScript", "Node Express", "Angular", "Socket.io"],
                summary: "A real-time multiplayer trivia game where players can select their own question categories."
            },
            {
                id: "code03",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/caloriePedia.png",
                projectName: "CaloriePedia",
                stack: ["Python", "Django", "YelpAPI", "MySQL"],
                summary: "A web app that helps users track their daily calorie intake along with their body fat percent and weight."
            }
        ],
        uxProjects: [
            {
                id: "ux01",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/artist_craftsman_supply.jpg",
                projectName: "Artist & Craftsman",
                stack: ["User Survey", "Heuristic Evaluation", "User Interview", "User Scenario"],
                summary: "Customers have been complaining about the online shopping experience not being smooth enough. The goal of this project was to redesign the website and improve user experience."
            },
            {
                id: "ux02",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/the_boring_company.jpg",
                projectName: "The Boring Company",
                stack: ["C&C Analysis", "User Survey", "User Interview", "User Scenario"],
                summary: "The Boring company is building an underground transportation service to overcome rush hour traffic especially in LA. The goal of this project was to design an e-ticketing system for them."
            },
            {
                id: "ux03",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/forklift.jpg",
                projectName: "Forklift",
                stack: ["C&C Analysis", "Heuristic Evaluation", "User Interview", "Affinity Mapping"],
                summary: "According to the client, new users had challenges understanding how to use the platform even after a walk-through. The client wanted a more intuitive interface to improve usability. A redesign was conducted."
            }
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
        let displayedProjects
        
        if (this.state.projectsType == "coding") {
            codingProjectsClass = classes['heading-secondary']
            uxProjectsClass = classes['heading-secondary--deactivated']
        }
        else {
            codingProjectsClass = classes['heading-secondary--deactivated']
            uxProjectsClass = classes['heading-secondary']
        }

        if (this.state.projectsType === "coding") {
            displayedProjects = this.state.codingProjects.map(project => {
                return <Project information={project} />
            })
        }
        else {
            displayedProjects = this.state.uxProjects.map(project => {
                return <Project information={project} />
            })
        }

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
                    {displayedProjects}
                </div>
            </section>
        )
    }
}

export default MyWorks;