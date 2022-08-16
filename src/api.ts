import axios from 'axios';

const http: string = 'https://jsonplaceholder.typicode.com';

export const API = {
    reqAlbums: async () => {
        try {
            let result = await axios.get(`${http}/albums`);
            return result.data;
        } catch(err) {
            alert('Ocorreu algum erro, tente novamente mais tarte!');
            console.error(err);
        }
        
    },
    reqAlbum: async (id: number) => {
        try {
            let result = await axios.get(`${http}/albums/${id}`);
            return result.data;
        } catch(err) {
           alert('Ocorreu algum erro, tente novamente mais tarte!');
           console.error(err);
        }        
    },
    reqPhotos: async (id: number) => {
        try {
            let result = await axios.get(`${http}/albums/${id}/photos`);
            return result.data;
        } catch(err) {
           alert('Ocorreu algum erro, tente novamente mais tarte!');
           console.error(err);
        }
        
    },
    reqPhoto: async (id: number) => {
        try {
            let result = await axios.get(`${http}/photos/${id}`);
            return result.data;
        } catch(err) {
           alert('Ocorreu algum erro, tente novamente mais tarte!');
           console.error(err);
        }
        
    }
}