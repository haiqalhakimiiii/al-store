import { useParams } from 'react-router-dom';

export function ProductDetail() {
    const { id } = useParams();

    return (
        <>
            <div className="text-center">Product Detail for {id}</div>
        </>
    );
}
