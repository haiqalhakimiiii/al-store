import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SpinnerLoading() {
    return(
        <div className='flex justify-center mt-[10rem]'>
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}