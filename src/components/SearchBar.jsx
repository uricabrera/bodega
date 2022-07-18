import {useState} from "react";

const SearchBar = ({onChange,onSubmit,onClick,input}) => {



    return(
        <div className="searchbar">
            <form className="searchbar_form" onSubmit={onSubmit}>
                <div>
                    <input className="searchbar_form_input" name="search" type="text" autocomplete="off" placeholder={`Buscar por ${input.filter}`} onChange={onChange} />
                    <input className="searchbar_form_submit" value={"Buscar"} type="submit"/>
                </div>
                <div className="searchbar_form_advanced">
                    <input type="radio" name="filter" value="proveedor" onChange={onChange} defaultChecked/>
                    <label>Proveedor</label>
                    <input type="radio" name="filter" value="cliente" onChange={onChange}/>
                    <label>Cliente</label>
                    <input type="radio" name="filter" value="producto" onChange={onChange}/>
                    <label>Producto</label>
                </div>
            </form>
        </div>
    )
}


export default SearchBar;