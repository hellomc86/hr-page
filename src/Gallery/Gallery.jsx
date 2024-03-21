//import GridItem from "./gridItemt";
import GridItem from "./gridItemGrid";

import "./Gallery.css";
import "./../index.css"
import { useEffect, useState } from "react";
import apiService from "../api/api.service";
import DetailedInfo from './detailedInfo'
const Gallery = ( { items, loading } ) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const [clickedIndex, setClickedIndex] =useState(0);

 

  return (
    
    <div className="Gallery">      
    {items.map((item, index) => (
      <GridItem key={index} index = {index} item = {item} setIsOpen = {setIsOpen} setClickedIndex = {setClickedIndex} />
  ))}
  {!loading && <DetailedInfo items={items} index = {clickedIndex}  modalIsOpen={modalIsOpen} setIsOpen = {setIsOpen} /> }
  </div>
  
  )
};


export default Gallery;
