import './loader.css';

interface Props {
    fontSize?: string;
}

export default function Loader({ fontSize = '1rem' }: Props) {
    return <div className='loader' style={{ fontSize }}></div>;
}
