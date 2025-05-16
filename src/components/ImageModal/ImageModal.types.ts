

export interface ImageModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    image: Image|null
};


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