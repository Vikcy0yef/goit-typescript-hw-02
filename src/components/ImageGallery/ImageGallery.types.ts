export interface Image{
    id: string
    src: string
    alt: string
    alt_description?: string|null
    urls: {
        small: string
        regular: string
    }
}

export interface ImageGalleryProps{
    images: Image[];
    onImageClick: (image: Image) => void;
}
