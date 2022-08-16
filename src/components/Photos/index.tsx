import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../api';
import { PhotosType } from '../../types/types';
import { Loading } from "../Loading";
import { Button } from '../Button';
import LoadingImg from '../../images/loading.gif';
import * as C from './styles';

export const Photos = () => {
    const [photo, setPhoto] = useState<PhotosType>();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        loadingPhoto();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [photo]);

    const loadingPhoto = async () => {
        if(params.id) {            
            setLoading(true);
            let result: PhotosType = await API.reqPhoto(parseInt(params.id));
            setPhoto(result);            
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
            <C.PhotoArea key={photo?.id}>
                <C.PhotoTitle>{photo?.title}</C.PhotoTitle>
                <C.Photo src={photo?.url} />                
            </C.PhotoArea>            
            }
        </>
    );
}