import { Link } from 'react-router-dom';

export function ProductCard({ products }) {
    return (
        <>
            <div className="grid grid-cols-6 gap-4 max-[1440px]:grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2">
                {products.map((product) => (
                    <Link key={product.id} to={`/product-detail/${product.id}`}>
                        <div className="cursor-pointer">
                            <div className="w-50 h-80 shadow-md border hover:border-[#301934]">
                                <div className="flex flex-col justify-between h-full bg-white">
                                    <div className='h-3/4 flex justify-center'>
                                        <img
                                            src={product.image}
                                            className="h-full w-full object-contain"
                                            alt="Product Image"
                                        />
                                    </div>

                                    <div className="h-1/4 px-1 py-1 bg-gray-100">
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
                    </Link>
                ))}
            </div>
        </>
    );
}
