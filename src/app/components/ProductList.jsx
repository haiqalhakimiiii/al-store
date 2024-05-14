import { useEffect } from 'react';
import { useState } from 'react';

export function ProductList() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(6);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`https://fakestoreapi.com/products?limit=${productCount}`);
            const result = await response.json();
            setProducts(result);
        }
        fetchProducts();
    }, [productCount]);

    function viewMore() {
        setProductCount((prev) => prev + 6);
    }

    return (
        <>
            <div className="py-10">
                <p className="font-bold text-2xl mb-3 text-[#382a81]">PRODUCTS OF THE DAY</p>
                <div className="grid grid-cols-6 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="basis-1/5 cursor-pointer">
                            <div className="w-50 h-80 shadow-md border hover:border-[#301934]">
                                <div className="flex flex-col justify-between h-full bg-white">
                                    <img src={product.image} className="w-60 h-60 object-contain" alt="Product Image" />

                                    <div className="px-1 py-1 bg-gray-100">
                                        <p className="truncate">{product.title}</p>
                                        <div className="flex justify-between">
                                            <div className="text-[#669243]">RM{product.price}</div>
                                            <div className="flex gap-1">
                                                <div>{product.rating.rate}</div>
                                                <div>({product.rating.count})</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {productCount < 20 && (
                    <div className="text-center pt-5">
                        <button
                            className="border py-4 px-6 bg-[#382a81] text-white rounded-xl font-semibold"
                            onClick={viewMore}>
                            VIEW MORE
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
