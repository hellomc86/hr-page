
import { useEffect, useState } from 'react';
import apiService from "./api/api.service";

const Search = ( { setItems, setLoading, setError } ) => {
 
    const [search, setSearch] = useState('');
    
    
    const getInfo = async() => {
      try {
        await apiService.getInfoByName(search)
        .then(response => {setItems(response)
          console.log("response ", response);      
        })
      } catch (error) {
        setError(error);
        console.log(error);
        
      } finally {        
        setLoading(false);
      }
      
    };
  
   
  
  
    useEffect(() => {
      getInfo();
     
    }, [search]);

  return (    
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>     
      
     <input
      id="search"
      type="text"
      placeholder="Search Name"
      value = {search}
      onChange={ (e)=> {setSearch(e.target.value); console.log(search)} }
      />
 </form> 
  ); 
}

export default Search;
