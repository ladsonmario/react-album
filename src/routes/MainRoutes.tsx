import { useRoutes } from "react-router-dom";
import { Albums } from "../components/Albums";
import { Album } from "../components/Album";
import { Photos } from "../components/Photos";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Albums />},
        {path: '/album/:id', element: <Album />},
        {path: '/photos/:id', element: <Photos />}
    ]);
}