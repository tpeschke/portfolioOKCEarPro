import React, { Component } from 'react'
import Modal from 'react-responsive-modal';

export default class ContactEmailModal extends Component {

    onCloseModal = () => { }

    render() {
        var { sending, deliever } = this.props

        return (
            <div>
                <Modal open={sending} little showCloseIcon={false} onClose={this.onCloseModal}>
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
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