import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

export default class ContactEmailModal extends Component {

    onCloseModal = () => { }

    render() {
        var { sending, deliever } = this.props

        return (
            <div>
                <Modal open={sending} little showCloseIcon={false} onClose={this.onCloseModal}>
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                    <h2 style={{ color: 'black' }}>Sending</h2>
                </Modal>

                <Modal open={deliever} little showCloseIcon={false} onClose={this.onCloseModal}>
                    <h2 style={{ color: 'black' }}>Email Sent</h2>
                </Modal>
            </div>
        )
    }
}