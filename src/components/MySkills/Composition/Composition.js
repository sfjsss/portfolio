import React from 'react';

import classes from './Composition.module.scss';
import django_icon from '../../../assets/img/skill_icons/icon-django-240.png';
import python_icon from '../../../assets/img/skill_icons/icon-python-240.png';
import javaScript_icon from '../../../assets/img/skill_icons/icon-javascript-240.png';
import java_icon from '../../../assets/img/skill_icons/icon-java-240.png';
import node_icon from '../../../assets/img/skill_icons/icon-node-240.png';
import spring_icon from '../../../assets/img/skill_icons/icon-spring-240.png';
import react_icon from '../../../assets/img/skill_icons/icon-react-240.png';
import angular_icon from '../../../assets/img/skill_icons/icon-angular-240.png';
import mysql_icon from '../../../assets/img/skill_icons/icon-mysql-240.png';
import mongodb_icon from '../../../assets/img/skill_icons/icon-mongodb-240.png';


const composition = () => {
    return (
        <div className={classes.composition}>
            <img src={python_icon} className={classes.photo}/>
            <img src={javaScript_icon} className={classes.photo}/>
            <img src={java_icon} className={classes.photo}/>
            <img src={django_icon} className={classes.photo}/>
            <img src={node_icon} className={classes.photo}/>
            <img src={spring_icon} className={classes.photo}/>
            <img src={react_icon} className={classes.photo}/>
            <img src={angular_icon} className={classes.photo}/>
            <img src={mysql_icon} className={classes.photo}/>
            <img src={mongodb_icon} className={classes.photo}/>
        </div>
    )
}

export default composition;