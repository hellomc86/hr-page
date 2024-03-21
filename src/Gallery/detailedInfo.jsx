import { GrClose } from "react-icons/gr";
import Modal from 'react-modal';
import "./detailedInfo.css"
const DetailedInfo = ({ items, index, modalIsOpen, setIsOpen }) => {

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

  const handleCloseModal = () => {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '1rem'
    },
  };

  const item = items[index];
  return (
    <Modal    
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      onRequestClose={handleCloseModal}
    >
      
      <div className="detailed-grid">
      
        <div className="name">{item.name} <GrClose onClick={handleCloseModal} /> </div>
        <div className="infoTitle">Phone:</div>
        <div className="info" >{item.phone} </div>
        <div className="infoTitle">E-mail:</div>
        <div className="info"> {item.email}</div>
        <div className="infoTitle">Hire Date:</div>
        <div className="info" >{item.hire_date} </div>
        <div className="infoTitle">Position:</div>
        <div className="info"> {item.position_name}</div>
        <div className="infoTitle">Department:</div>
        <div className="info" >{item.department} </div>
        <div className="infoTitleMore">More details</div>
        <div className="infoMore">{item.department }  {item.position_name} </div>
        
      </div>
    </Modal>
  );
};

export default DetailedInfo;
