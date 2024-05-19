import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../components/ProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SimilarProduct } from '../components/SimilarProduct';
import { SpinnerLoading } from '../components/SpinnerLoading';

export function ProductDetail() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`${baseUrl}/products/${id}`)
            .then((response) => response.json())
            .then((result) => {
                setProductDetails(result);
            });
    }, [id]);

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    function addToCart(count) {
        console.log(`added to cart with count of ${count}`);
    }

    return (
        <>
            {productDetails ? (
                <div className="py-10">
                    <p className="font-bold text-2xl mb-3 text-[#382a81]">{productDetails.title}</p>
                    <div className="pt-2 flex gap-5">
                        <div className="w-1/4 bg-white p-10">
                            <img
                                src={productDetails.image}
                                className="w-full h-full object-contain"
                                alt="Product Image"
                            />
                        </div>
                        <div className="w-2/4 flex justify-center items-center">
                            <div>
                                <div>
                                    <p className="text-[#382a81] font-semibold">Description:</p>
                                    <p className="text-[#382a81] text-justify">{productDetails.description}</p>
                                </div>
                                <div className="mt-3">
                                    <p className="text-[#382a81] font-semibold">
                                        Category:{' '}
                                        <span className="capitalize font-normal py-1 px-3 text-white bg-[#382a81] rounded-full leading-">
                                            {productDetails.category}
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <p className="text-[#382a81] font-semibold">
                                        Rating:{' '}
                                        <span className="font-normal">
                                            {productDetails.rating.rate}/5 ({productDetails.rating.count})
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <span className="text-[#382a81] text-3xl font-bold tracking-wide">
                                        RM {productDetails.price.toFixed(2)}
                                    </span>
                                </div>
                                <div className="mt-3 h-9">
                                    <div className="flex h-full">
                                        <div
                                            className="border border-[#382a81] w-10 flex justify-center items-center cursor-pointer"
                                            onClick={increment}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                        <div className="border-y border-[#382a81] w-20 flex justify-center items-center">
                                            <p>{count}</p>
                                        </div>
                                        <div
                                            className="border border-[#382a81] w-10 flex justify-center items-center cursor-pointer"
                                            onClick={decrement}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button
                                        className="bg-[#382a81] w-[10rem] h-[2.5rem] rounded text-white"
                                        onClick={() => addToCart(count)}>
                                        Add to Card <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[5rem]'>
                        <SimilarProduct category={productDetails.category} currentProduct={productDetails.id} />
                    </div>
                </div>
            ) : (
                <SpinnerLoading />
            )}
        </>
    );
}
