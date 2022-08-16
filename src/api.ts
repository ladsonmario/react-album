import axios from 'axios';

const http: string = 'https://jsonplaceholder.typicode.com';

export const API = {
    reqAlbums: async () => {
        let result = await axios.get(`${http}/albums`);
        return result.data
    },
    reqPhotos: async () => {
        let result = await axios.get(`${http}/photos`);
        return result.data;
    }
}