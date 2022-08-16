export type AlbumsType = {
    id: number;
    userId: number;
    title: string;
}

export type PhotosType = {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}