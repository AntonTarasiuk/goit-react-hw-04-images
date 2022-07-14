import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";

export const GalleryItem = ({ id, image, modalImg }) => {
    return (
        <ImageGalleryItem >
            <ImageGalleryItemImg src={image}/>
        </ImageGalleryItem>
    )
}