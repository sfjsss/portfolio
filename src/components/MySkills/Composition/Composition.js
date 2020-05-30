import React from 'react';

import classes from './Composition.module.scss';
import bootstrap_icon from '../../../assets/img/skill_icons/icon-bootstrap-240.png';
import javaScript_icon from '../../../assets/img/skill_icons/icon-javascript-240.png';
import typeScript_icon from '../../../assets/img/skill_icons/icon-typescript-240.png';
import java_icon from '../../../assets/img/skill_icons/icon-java-240.png';
import springBoot_icon from '../../../assets/img/skill_icons/icon-springBoot-240.png';
import spring_icon from '../../../assets/img/skill_icons/icon-spring-240.png';
import react_icon from '../../../assets/img/skill_icons/icon-react-240.png';
import angular_icon from '../../../assets/img/skill_icons/icon-angular-240.png';
import mysql_icon from '../../../assets/img/skill_icons/icon-mysql-240.png';
import postgresql_icon from '../../../assets/img/skill_icons/icon-postgresql-240.png';
import sketch_icon from '../../../assets/img/skill_icons/icon-sketch-240.png';
import principal_icon from '../../../assets/img/skill_icons/icon-principal-240.png';

const composition = () => {
    return (
        <div className={classes.composition}>
            <img src={typeScript_icon} className={classes.photo} alt="skill_icon"/>
            <img src={javaScript_icon} className={classes.photo} alt="skill_icon"/>
            <img src={java_icon} className={classes.photo} alt="skill_icon"/>
            <img src={bootstrap_icon} className={classes.photo} alt="skill_icon"/>
            <img src={springBoot_icon} className={classes.photo} alt="skill_icon"/>
            <img src={spring_icon} className={classes.photo} alt="skill_icon"/>
            <img src={react_icon} className={classes.photo} alt="skill_icon"/>
            <img src={angular_icon} className={classes.photo} alt="skill_icon"/>
            <img src={mysql_icon} className={classes.photo} alt="skill_icon"/>
            <img src={postgresql_icon} className={classes.photo} alt="skill_icon"/>
            <img src={sketch_icon} className={classes.photo} alt="skill_icon"/>
            <img src={principal_icon} className={classes.photo} alt="skill_icon"/>
        </div>
    )
}

export default composition;