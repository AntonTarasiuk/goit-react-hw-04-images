import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGallery } from "./ImageGallery.styled";

export const Gallery = ({data}) => {
    // console.log(data)
    return (
        <ImageGallery>
            {
                data && data.map(({ id, webformatURL, largeImageURL }) => 
                // console.log(webformatURL)) 
                <GalleryItem key={id} id={id} image={webformatURL} modalImg={largeImageURL} />)
            }
            {/* // <!-- Набор <li> с изображениями --> */}
        </ImageGallery>
    )
}