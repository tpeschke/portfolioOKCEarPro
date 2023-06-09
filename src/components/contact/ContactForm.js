import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import ContactEmailModal from './ContactEmailModal'

class ContactForm extends Component {
    constructor() {
        super()

        this.state = {
            show: false,
            name: '',
            from: '',
            number: '',
            subject: '',
            message: '',
            sending: false,
            deliever: false
        }

        this.onCloseDelievered = this.onCloseDelievered.bind(this);
    }

    handleChange = (v, type) => {
        switch (type) {
            case 'name':
                this.setState({ name: v }) 
                break
            case 'email':
                this.setState({ from: v })
                break
            case 'number':
                this.setState({ number: v })
                break
            case 'subject':
                this.setState({ subject: v })
                break
            case 'message':
                this.setState({ message: v })
                break
        }
    }

    handleInput = (e) => {
        if (e === this.state.subject) {
            this.setState({ subject: '' })
        } else {
            this.setState({ subject: e })
        }
    }

    handleSubmit = () => {
        var { from, email, name, number, subject, message } = this.state
        
        if (from === '' || email === '') {
            this.setState({ show: true })
        } else {
            this.onOpenSend()
            this.setState({ show: false })
            var newEmail = {
                name, email, from, number, subject, message
            }
            axios.post('/api/sendEmail', newEmail).then((req, res) => {
                this.onCloseSend()
                this.onOpenDelievered()
                setTimeout(_=>this.onCloseDelievered(),2000)
            })
        }
    }

    onOpenSend = () => {
        this.setState({ sending: true });
    }

    onCloseSend = () => {
        this.setState({ sending: false });
    }

    onOpenDelievered = () => {
        this.setState({ deliever: true });
    }

    onCloseDelievered () {
        this.setState({ deliever: false });
        this.props.history.push('/')
    }

    render() {
        var { subject } = this.state
        return (
            <div className="contactHeader">
                <h4>Book An Appointment</h4>
                <div className="contactFormContainer">
                    <input className="contactFormInput" placeholder="Name*" onChange={e => this.handleChange(e.target.value, 'name')} />
                    <input className="contactFormInput" placeholder="Email*" onChange={e => this.handleChange(e.target.value, 'email')} />
                    <input className="contactFormInput" placeholder="Number" onChange={e => this.handleChange(e.target.value, 'number')} />
                    <h3 className="contactFormSubtitle">* required</h3>

                    <div className="contactFormChecks">
                        <p className="contactFormHeader">What can we do for you?</p>
                        <div>
                            <div className="contactRadioLine"><input type="checkbox" value="personal" checked={subject === 'personal'} onChange={e => this.handleInput(e.target.value)} /><p className="contactRadioLabel">Personal Appointment</p></div>
                            <div className="contactRadioLine"><input type="checkbox" value="business" className="contactCheck" checked={subject === 'business'} onChange={e => this.handleInput(e.target.value)} /><p className="contactRadioLabel">Business Consultation</p></div>
                            <div className="contactRadioLine"><input type="checkbox" value='event' checked={subject === 'event'} onChange={e => this.handleInput(e.target.value)} /><p className="contactRadioLabel">Find or Host Open Event</p></div>
                            <div className="contactRadioLine"><input type="checkbox" value="party" checked={subject === 'party'} onChange={e => this.handleInput(e.target.value)} /><p className="contactRadioLabel">Group OKC EarPro Party</p></div>
                            <div className="contactRadioLine"><input type="checkbox" value="other" checked={subject === 'other'} onChange={e => this.handleInput(e.target.value)} /><p className="contactRadioLabel">Other</p></div>
                        </div>
                    </div>

                    <textarea className="contactFormInput" placeholder="Message" onChange={e => this.handleChange(e.target.value, 'message')} />
                    <div className="contactButtonContainer">
                        <input type='submit' className="contactButton" onClick={this.handleSubmit} />
                        <h1 className={this.props.show ? "contactWarning contactWarningShow" : "contactWarning"}>Please Fill Out Your Name and/or Email</h1>
                    </div>
                </div>

                <ContactEmailModal 
                    sending={this.state.sending}
                    deliever={this.state.deliever}/>
            </div>
        )
    }
}

export default withRouter(ContactForm)