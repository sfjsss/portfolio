import React, { Component } from 'react';

import classes from './ContactMe.module.scss';
import Button from '../../components/UI/Button/Button';
import Popup from '../../components/UI/Popup/Popup';

class ContactMe extends Component {
    state = {
        popup: false
    }

    openPopupHandler = (event) => {
        event.preventDefault()
        this.setState({popup: true})
    }

    closePopupHandler = () => {
        this.setState({popup: false})
    }

    render() {
        return (
            <section className={classes['contact-me']}>
                <div className={classes.row}>
                    <div className={classes.contact}>
                        <div className={classes['contact__form']}>
                            <form className={classes.form} onSubmit={this.openPopupHandler}>
                                <div className={classes['u-margin-bottom-medium']}>
                                    <h2 className={classes['heading-secondary']}>
                                        Let's work together
                                    </h2>
                                </div>
                                <div className={classes['form__group']}>
                                    <input id='name' type='text' className={classes['form__input']} placeholder='Name' required/>
                                    <label htmlFor='name' className={classes['form__label']}>Name</label>
                                </div>
                                <div className={classes['form__group']}>
                                    <input id='email' type='email' className={classes['form__input']} placeholder='Email' required/>
                                    <label htmlFor='email' className={classes['form__label']}>Email</label>
                                </div>
                                <div className={classes['form__group']}>
                                    <textarea rows='3' id='message' className={classes['form__message']} placeholder='message'></textarea>
                                    <label htmlFor='message' className={classes['form__label']}>Message</label>
                                </div>
                                <div className={classes['form_group']}>
                                    <Button btnType="button" btnStyle="btn" color="primary">submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.popup ? <Popup closePopup={this.closePopupHandler} /> : null}
            </section>
        )
    }
}

export default ContactMe