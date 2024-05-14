import { useCallback, useEffect, useState } from 'react';
import { Sort } from './Sort';
import { Loading } from './Loading';

export function ProductList() {
    const baseUrl = 'https://fakestoreapi.com';

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(6);
    const [sortOrder, setSortOrder] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);

        fetch(`${baseUrl}/products?limit=${productCount}&sort=${sortOrder}`)
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
                setIsLoading(false);
            });
    }, [productCount, sortOrder]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    function viewMore() {
        setProductCount((prev) => prev + 6);
    }

    function handleSort(value) {
        setSortOrder(value);
    }

    // THIS NEW SET GIT CONFIG

    return (
        <>
            <div className="py-10">
                <div className="flex justify-between">
                    <p className="font-bold text-2xl mb-3 text-[#382a81]">PRODUCTS OF THE DAY</p>
                    <Sort handleSort={handleSort} />
                </div>

                {isLoading ? (
                    <div className="mx-auto text-center">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-6 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="basis-1/5 cursor-pointer">
                                    <div className="w-50 h-80 shadow-md border hover:border-[#301934]">
                                        <div className="flex flex-col justify-between h-full bg-white">
                                            <img
                                                src={product.image}
                                                className="w-60 h-60 object-contain"
                                                alt="Product Image"
                                            />

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
                    </>
                )}
            </div>
        </>
    );
}
