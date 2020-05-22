import React, { Component } from 'react';

import classes from './MyWorks.module.scss';
import Project from './Project/Project';
import axios from '../../axios-backend';

class MyWorks extends Component {
    state = {
        codingProjects: [
            {
                id: "code01",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/job_search_tracker.png",
                projectName: "Job Search Tracker",
                stacks: ["Java", "Spring Boot", "JSP", "MySQL"],
                summary: "A web app that helps users track and analyze their job searching progress.",
                source_code: "https://github.com/sfjsss/jobSearchTracker"
            },
            {
                id: "code02",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/trivia_warrior.png",
                projectName: "Trivia Warrior",
                stacks: ["JavaScript", "Node Express", "Angular", "Socket.io"],
                summary: "A real-time multiplayer trivia game where players can select their own question categories.",
                source_code: "https://github.com/sfjsss/triviaWarrior"
            },
            {
                id: "code03",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/revHousingMockup.png",
                projectName: "RevHousing",
                stacks: ["Java", "Angular", "Spring", "PostgreSQL"],
                summary: "The RevaHousing application will be used to assist relocated employees in finding available housing from corresponding Revature employees that have property available for rent.",
                source_code: "https://github.com/sfjsss/revHousingFrontEnd"
            }
        ],
        uxProjects: [
            {
                id: "ux01",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/artist_craftsman_supply.jpg",
                projectName: "Artist & Craftsman",
                stacks: ["User Survey", "Heuristic Evaluation", "User Interview", "User Scenario"],
                summary: "Customers have been complaining about the online shopping experience not being smooth enough. The goal of this project was to redesign the website and improve user experience.",
                source_code: "https://www.tianyulidesign.com/artist-craftsman-supply"
            },
            {
                id: "ux02",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/the_boring_company.jpg",
                projectName: "The Boring Company",
                stacks: ["C&C Analysis", "User Survey", "User Interview", "User Scenario"],
                summary: "The Boring company is building an underground transportation service to overcome rush hour traffic especially in LA. The goal of this project was to design an e-ticketing system for them.",
                source_code: "https://www.tianyulidesign.com/the-boring-company"
            },
            {
                id: "ux03",
                bgImage: "https://tianyuli-portfolio-files.s3-us-west-2.amazonaws.com/forklift.jpg",
                projectName: "Forklift",
                
                stacks: ["C&C Analysis", "Heuristic Evaluation", "User Interview", "Affinity Mapping"],
                summary: "According to the client, new users had challenges understanding how to use the platform even after a walk-through. The client wanted a more intuitive interface to improve usability. A redesign was conducted.",
                source_code: "https://www.tianyulidesign.com/forklift"
            }
        ],
        projectsType: "coding"
    }

    // componentDidMount() {
    //     axios.get('/projects/')
    //         .then(res => {
    //             this.setState({
    //                 codingProjects: res.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

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
        
        if (this.state.projectsType === "coding") {
            codingProjectsClass = classes['heading-secondary']
            uxProjectsClass = classes['heading-secondary--deactivated']
        }
        else {
            codingProjectsClass = classes['heading-secondary--deactivated']
            uxProjectsClass = classes['heading-secondary']
        }

        if (this.state.projectsType === "coding") {
            displayedProjects = this.state.codingProjects.map(project => {
                return <Project key={project.id} information={project} />
            })
        }
        else {
            displayedProjects = this.state.uxProjects.map(project => {
                return <Project key={project.id} information={project} />
            })
        }

        return (
            <section id='works' className={classes['my-works']}>
                <div className={`${classes['u-center-text']} ${classes['u-margin-bottom-big']}`}>
                    <h2 onClick={this.selectCodingHandler} className={codingProjectsClass}>
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