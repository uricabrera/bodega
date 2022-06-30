import {useState} from "react";

const SearchBar = ({onChange,onSubmit,onClick,input}) => {



    return(
        <div className="searchbar">
            <form className="searchbar_form" onSubmit={onSubmit}>
                <div>
                    <input className="searchbar_form_input" name="search" type="text" placeholder={`Buscar por ${input.filter}`} onChange={onChange} />
                    <input className="searchbar_form_submit" value={"Buscar"} type="submit"/>
                </div>
                <div className="searchbar_form_advanced">
                    <input type="radio" name="filter" value="proveedor" onChange={onChange} defaultChecked/>
                    <label htmlFor="company">Proveedor</label>
                    <input type="radio" name="filter" value="cliente" onChange={onChange}/>
                    <label htmlFor="name">Cliente</label>
                    <input type="radio" name="filter" value="producto" onChange={onChange}/>
                    <label htmlFor="id">Producto</label>
                </div>
            </form>
        </div>
    )
}


export default SearchBar;