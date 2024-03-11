 import {useState} from 'react';
import './SearchBar.css';
 function Searchbar ({onSubmit})
 {
    const [term,setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit = {handleFormSubmit}>
                <label>Search Images</label>
             <input  value={term} onChange ={handleChange}/>
            </form>
        </div>
    );
 }


 export default Searchbar;