import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modal, CloseModalBtn, CloseModalIcon } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export const ModalWindow = ({imgUrl, onCloseModal}) => {
    useEffect(() => {
        const handelKeyDown = e => {
            if (e.code === 'Escape') {
                console.log(e.code)
                onCloseModal();
            }
        }
        window.addEventListener('keydown', handelKeyDown);
        return () => window.removeEventListener('keydown', handelKeyDown)
    }, [onCloseModal])


    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onCloseModal();
        }
    }

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <Modal>
                <img src={imgUrl} alt="Modal pics"/>
            </Modal>
            <CloseModalBtn type="button" onClick={onCloseModal}>
                <CloseModalIcon />
            </CloseModalBtn>
        </Overlay>,
        modalRoot,
    )
}