import React, {useCallback, useState} from 'react';
import style from "./Search.css";

const Search = (props) => {
    const [termine,setTermine] = useState("");

    const handleTermChange = useCallback((term) =>{
        setTermine(term.target.value);
    }, []);

    const search = useCallback(()=>{
        props.onSearch(termine);
    }, [props.onSearch, termine]);

    return(
        <div className='box-ricerca'>
            <input className="barra" placeholder="Inserisci un titolo da cercare" onChange={handleTermChange} />
            <button className="button" onClick={search}>
            SEARCH
            </button>
        </div>
    );

}

export default Search;