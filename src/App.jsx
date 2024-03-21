

import { useEffect, useState } from 'react';
import Gallery from './Gallery/Gallery'

import Search from './Search'

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if(!loading)
  {
    console.log("if", items);
  }
  


  return (
    <div className='App'>  
    
    <Search setItems = {setItems} setLoading = {setLoading} setError = {setError} />   
    {!loading && !error && <Gallery items = {items} loading = {loading} />    }
    </div>
  )
}

export default App
