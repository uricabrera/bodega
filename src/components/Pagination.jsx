import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {useContext} from "react";
import {PaginationContext} from "../contexts/PaginationContext";


const Pagination = () => {

    const {pagination,setPagination,setSelectedPage,moveToNextPage,moveToPreviousPage,showPaginationStatus} = useContext(PaginationContext);




    return(
        <div className="pagination">
            <div className="pagination__left">
                <AiOutlineArrowLeft onClick={() => moveToPreviousPage()}/>
            </div>
            <div className="pagination__content">
                {
                    [...Array(pagination.numberPages)].map((e, i) => {
                        if(i+1 === 1 || i+1 === Number(pagination.numberPages) || ((i+1) - 3) === Number(pagination.selectedPage) - 3 || ((i+1) - 2) === Number(pagination.selectedPage) - 2 || ((i+1) - 1) === Number(pagination.selectedPage) - 1 || ((i+1)) === Number(pagination.selectedPage) || ((i+2)) === Number(pagination.selectedPage) + 1 || ((i+3)) === Number(pagination.selectedPage) + 2 || ((i+4)) === Number(pagination.selectedPage) + 3){
                            return (<span className={`pagination__content__item ${(i+1) === Number(pagination.selectedPage) ? "pagination__content__selecteditem" : ""}`} onClick={() => setSelectedPage(Number(i+1))} key={i}>{i+1}</span>)
                        }else{
                            return ""
                        }
                    })
                }
            </div>
            <div className="pagination__right">
                <AiOutlineArrowRight onClick={() => moveToNextPage()}/>
            </div>
        </div>
    )
}


export default Pagination;