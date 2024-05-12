export function Card({ product }) {
    return (
        <>
            <div className="w-60 h-80 shadow-md border hover:border-[#301934]">
                <div className="flex flex-col justify-between h-full">
                    <img src={product.image} className="w-60 h-60 object-contain" alt="Product Image" />

                    <div className="px-1 py-1">
                        <p className="truncate">{product.title}</p>
                        <div className="flex justify-between">
                            <div className="text-[#669243]">RM{product.price}</div>
                            <div className="flex gap-4">
                                <div>{product.rating.rate}</div>
                                <div>({product.rating.count})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
