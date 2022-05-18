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
                    <input type="radio" name="filter" value="monodroga" onChange={onChange} defaultChecked/>
                    <label htmlFor="company">Monodroga</label>
                    <input type="radio" name="filter" value="nombre comercial" onChange={onChange}/>
                    <label htmlFor="name">Nombre Comercial</label>
                    <input type="radio" name="filter" value="laboratorio" onChange={onChange}/>
                    <label htmlFor="id">Laboratorio</label>
                </div>
            </form>
        </div>
    )
}


export default SearchBar;