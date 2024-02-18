export type Photo = {
    alt: string,
    src: {
        tiny: string,
        original: string,
        large: string

    }
}
export type Photos = {
    photos: Photo[]
}