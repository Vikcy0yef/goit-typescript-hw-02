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
export interface UnsplashApiImage{
    id: string
    alt_description: string | null
    urls: {
        small: string
        regular: string
    }
}
export interface UnsplashResponse{
    results: UnsplashApiImage[]
}