// import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Overlay, Modal, CloseModalBtn, CloseModalIcon } from "./Modal.styled";
// import * as basicLightbox from 'basiclightbox'

export class ModalWindow extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handelKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handelKeyDown)
    }

    handelKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onCloseModal();
        }
    }

    render() {
        const {imgUrl, onCloseModal} = this.props
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <Modal>
                    <img src={imgUrl} alt="Modal pics"/>
                </Modal>
                <CloseModalBtn type="button" onClick={onCloseModal}>
                    <CloseModalIcon />
                </CloseModalBtn>
            </Overlay>
        )
    }
}
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)