import { useEffect, useState } from 'react';
import { baseUrl } from './ProductList';
import { ProductCard } from './ProductCard';
import { SpinnerLoading } from './SpinnerLoading';

export function SimilarProduct({ category, currentProduct }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/products/category/${category}`)
            .then((response) => response.json())
            .then((result) => {
                const filteredProducts = result.filter((product) => product.id !== currentProduct);
                setProducts(filteredProducts);
            });
    }, [category, currentProduct]);

    return (
        <>
            <p className="font-bold text-2xl mb-3 text-[#382a81]">Other <span className='capitalize'>{category}</span></p>
            {products ? <ProductCard products={products} /> : <SpinnerLoading />}
        </>
    );
}
