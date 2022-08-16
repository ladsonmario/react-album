import * as C from './styles';

type Props = {
    img: string;
}

export const Loading = ({ img }: Props) => {
    return (
        <C.Loading>
            <C.LoadingImg src={img} alt="" />
        </C.Loading> 
    );
}