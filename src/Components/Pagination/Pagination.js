import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Store/redux/Pagination";

const Pagination = ({ currentPageProp, hasNextPage, nextPage, hasPreviousPage, previousPage, lastPage}) => {
    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    }

    return (
        <div id="pagination">
            {hasPreviousPage &&
                <button onClick={() => { handlePageChange(previousPage) }}>
                    previous
                </button>}
            <button onClick={() => { handlePageChange(currentPageProp) }}>
                {currentPageProp}
            </button>
            {hasNextPage &&
                <button onClick={() => { handlePageChange(nextPage) }}>
                    nextPage
                </button>}
            {lastPage && (
                <span>Last Page: {lastPage}</span>
            )}
            
        </div>
    );
}

export default Pagination;