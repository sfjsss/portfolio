import React, { Component } from 'react';

import classes from './ContactMe.module.scss';

class ContactMe extends Component {
    render() {
        return (
            <section className={classes['contact-me']}>
                <div className={classes.row}>
                    <div className={classes.contact}>
                        <div className={classes['contact__form']}>
                            <form className={classes.form}>
                                <div className={classes['u-margin-bottom-medium']}>
                                    <h2 className={classes['heading-secondary']}>
                                        Let's work together
                                    </h2>
                                </div>
                                <div className={classes['form__group']}>
                                    <input id='name' type='text' className={classes['form__input']} placeholder='Name' required/>
                                    <label for='name' className={classes['form__label']}>Name</label>
                                </div>
                                <div className={classes['form__group']}>
                                    <input id='email' type='email' className={classes['form__input']} placeholder='Email' required/>
                                    <label for='email' className={classes['form__label']}>Email</label>
                                </div>
                                <div className={classes['form__group']}>
                                    <textarea id='message' className={classes['form__message']} placeholder='message'></textarea>
                                    <label for='message' className={classes['form__label']}>Message</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactMe