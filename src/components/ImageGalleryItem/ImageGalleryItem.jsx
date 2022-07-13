import { ImageGalleryItem, ImageGalleryItemImg } from "./ImageGalleryItem.styled";

export const GalleryItem = ({ id, image, modalImg }) => {
    return (
        <ImageGalleryItem key={id}>
            <ImageGalleryItemImg src={image}/>
        </ImageGalleryItem>
    )
}