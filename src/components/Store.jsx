import { FcSearch } from "react-icons/fc";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useState, useContext, useEffect} from "react";
import Pagination from "./Pagination";
import {PaginationContext} from "../contexts/PaginationContext";


const Store = () => {


    const {pagination,clearPagination} = useContext(PaginationContext);


    const [input,setInput] = useState({
        search: "",
        filter: "monodroga"
    });


    const onChange = (e) => {
        clearPagination();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    const onClick = (e) => {

    }

    useEffect(() => {
        console.log("Componente store refrescado!");
    },[])


    return(
        <section className="store">
            <SearchBar onSubmit={onSubmit} onChange={onChange} onClick={onClick} input={input} />
            <hr/>
            <Pagination/>
            <ProductTable input={input}/>
        </section>
    )
}

export default Store;