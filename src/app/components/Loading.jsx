export function Loading({ count }) {
    function cardLoader() {
        let elements = [];
        for (let i = 0; i < count; i++) {
            elements.push(
                <div key={i} className="w-50 h-80 shadow-md border">
                    <div className="animate-pulse flex flex-col justify-between bg-white h-full">
                        <div className="w-full h-5/6 bg-[#301934]"></div>
                        <div className="w-full h-1/6 bg-gray-100 px-2 py-2">
                            <div className="h-3 w-5/6 rounded bg-[#301934]"></div>
                            <div className="flex justify-between mt-3">
                                <div className="h-3 w-1/3 rounded bg-[#301934]"></div>
                                <div className="h-3 w-1/6 rounded bg-[#301934]"></div>
                            </div>
                        </div>
                    </div>
                </div>,
            );
        }

        return elements;
    }

    return (
        <>
            <div className="grid grid-cols-6 gap-4">{cardLoader()}</div>
        </>
    );
}
