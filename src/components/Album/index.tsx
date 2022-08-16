import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AlbumsType, PhotosType } from '../../types/types';
import { Loading } from "../Loading";
import { Button } from '../Button';
import * as C from './styles';
import { API } from '../../api';
import LoadingImg from '../../images/loading.gif';

export const Album = () => {
    const [album, setAlbum] = useState<AlbumsType>();
    const [photos, setPhotos] = useState<PhotosType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadingAlbum();
        loadingPhotos();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [photos, album]);

    const loadingAlbum = async () => {
        if(params.id) {
            setLoading(true);
            let result = await API.reqAlbum(parseInt(params.id));
            setAlbum(result);            
        }
    }

    const loadingPhotos = async () => {
        if(params.id) {
            setLoading(true);
            let result = await API.reqPhotos(parseInt(params.id));
            setPhotos(result);            
        }
    }

    const handleButtonBack = () => {
        navigate(-1);
    }
    
    return (
        <>
            <Button onClick={handleButtonBack} />
            
            {loading &&
                <Loading img={LoadingImg} />
            }
            {!loading &&
                <>
                    <C.Title key={album?.id}>{album?.title}</C.Title>            
                    <C.Photos>
                        {photos.map((item, index) => (
                            <Link to={`/photos/${item.id}`} key={index}>
                                <C.PhotoArea>
                                    <C.Photo src={item.thumbnailUrl} alt="" />
                                    <C.PhotoTitle>{item.title}</C.PhotoTitle>
                                </C.PhotoArea>
                            </Link>
                        ))}                
                    </C.Photos>            
                </>
            }
            
        </>
    );
}