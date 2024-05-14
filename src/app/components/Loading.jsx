import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Loading() {
    return (
        <>
            <FontAwesomeIcon icon={faSpinner} spin size='2xl' />
        </>
    );
}
