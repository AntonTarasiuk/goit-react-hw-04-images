import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";
import { useState } from "react";
import { ModalWindow } from "components/Modal/Modal";


export const GalleryItem = ({ id, image, modalImg }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <ImageGalleryItem key={id}>
                <ImageGalleryItemImg src={image} onClick={toggleModal} />
            </ImageGalleryItem>
            { isModalOpen && <ModalWindow imgUrl={modalImg} onCloseModal={toggleModal} />}
        </>

    )
}