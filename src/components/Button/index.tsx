import * as C from './styles';

type Props = {
    onClick: () => void;
}

export const Button = ({ onClick }: Props) => {
    return (
        <C.Button onClick={onClick}>Voltar</C.Button>
    );
}