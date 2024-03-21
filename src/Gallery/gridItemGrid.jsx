
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import "./gridItemGrid.css"
const GridItemGrid = ({ index,  item, setIsOpen, setClickedIndex }) => {

  const cardOnClicked = () => {
    setIsOpen(true);
    setClickedIndex(index);

  }

  return (

    <div className="grid-item-container" onClick={ cardOnClicked } >

      <div className="grid-item">
        <div className="name">{item.name}</div>
        <div className="icon"><HiOutlineDevicePhoneMobile /></div>
        <div className="info" >{item.phone} </div>
        <div className="icon"><MdMailOutline /> </div>
        <div className="info"> {item.email}</div>
      </div>
    </div>
  );
};

export default GridItemGrid;
