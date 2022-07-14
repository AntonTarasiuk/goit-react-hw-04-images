import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";
import { Component } from "react";
import { ModalWindow } from "components/Modal/Modal";


export class GalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

    render() {
        const { isModalOpen } = this.state;
        const { id, image, modalImg } = this.props;
        return (
            <>
                <ImageGalleryItem key={id}>
                    <ImageGalleryItemImg src={image} onClick={this.toggleModal} />
                </ImageGalleryItem>
                { isModalOpen && <ModalWindow imgUrl={modalImg} onCloseModal={this.toggleModal} />}
            </>

        )
    }
    
}