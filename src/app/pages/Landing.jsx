import { useEffect, useState } from 'react';

export function Landing() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="text-center">Landing</div>
        </>
    );
}
