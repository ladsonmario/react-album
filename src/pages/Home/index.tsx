import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumsType } from "../../types/types";
import { API } from "../../api";
import { Loading } from '../../components/Loading';
import * as C from './styles';
import LoadingImg from '../../images/loading.gif';

export const Home = () => {
    const [albums, setAlbums] = useState<AlbumsType[]>([]);  
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadingAlbums();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [albums]);

    const loadingAlbums = async () => {  
        setLoading(true);
        let result: AlbumsType[] = await API.reqAlbums();        
        setAlbums(result);                
    }

    return (
        <C.Container>
            {loading &&
                <Loading img={LoadingImg} />
            }
            {!loading &&
                <C.ContainerGrid>
                    {albums.map((item, index)=>(
                        <C.Albums key={index}><Link to={`/album/${item.id}`}>{item.title}</Link></C.Albums>
                    ))}
                </C.ContainerGrid>                       
            }
        </C.Container>
    );
}