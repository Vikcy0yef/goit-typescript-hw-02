export interface Image{
    id: string
    src: string
    alt: string
    alt_description?: string|null
    urls: {
        small: string
        regular: string
    }
};

export interface imageProps{
    image: Image;
    onClick: () => void;
}