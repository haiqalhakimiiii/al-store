import { useEffect, useState } from 'react';
import { baseUrl } from './ProductList';

export function SimilarProduct({ category, currentProduct }) {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(`${baseUrl}/products/category/${category}`)
            .then((response) => response.json())
            .then((result) => {
                const filteredProducts = result.filter((product) => product.id !== currentProduct)
                console.log(filteredProducts)
                setProducts(filteredProducts)
            })
    }, [category]);

    return (
        <>
            <p>Similar product for {category} except product with id {currentProduct}</p>
            {products && products.map((product) => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </>
    );
}
