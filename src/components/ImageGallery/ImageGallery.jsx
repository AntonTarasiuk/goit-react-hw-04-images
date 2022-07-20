import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGallery } from "./ImageGallery.styled";

export const Gallery = ({data}) => {
    return (
        <ImageGallery>
            {
                data && data.map(({ id, webformatURL, largeImageURL }) =>
                <GalleryItem key={id} id={id} image={webformatURL} modalImg={largeImageURL} />)
            }
        </ImageGallery>
    )
}