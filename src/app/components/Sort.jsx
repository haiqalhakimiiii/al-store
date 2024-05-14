import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useCallback } from 'react';

export function Sort({ handleSort }) {
    const [sortValue, setSortValue] = useState(null);

    useEffect(() => {
        if (sortValue !== null) {
            handleSort(sortValue);
        }
    }, [handleSort, sortValue]);

    const onSortClick = useCallback(() => {
        setSortValue(prevSortValue => {
            if (prevSortValue === null || prevSortValue === 'desc') {
                return 'asc';
            } else {
                return 'desc';
            }
        });
    }, []);

    return (
        <>
            <div className="flex items-center gap-2 cursor-pointer" onClick={onSortClick}>
                <p className="text-[#382a81]">Sort</p>
                <div className="flex flex-col">
                    <FontAwesomeIcon icon={faSort} style={{ color: '#382a81' }} />
                </div>
            </div>
        </>
    );
}
