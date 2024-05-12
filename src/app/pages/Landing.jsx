import { useEffect, useState } from 'react';
import { Card } from '../components/Card';

export function Landing() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setProducts(result);
        console.log(result);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className='py-10'>
            <p className='font-bold text-2xl mb-3 text-[#301934]'>
                PRODUCTS OF THE DAY
            </p>
            <div className="grid grid-cols-6 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="basis-1/5 cursor-pointer">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}
