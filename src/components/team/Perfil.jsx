import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Perfil = ({ img, name, role, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="person" onClick={toggleModal}>
            <Modal
                className="modal-dialog"
                isOpen={isOpen}
                appElement={document.getElementById('app')}
                onRequestClose={toggleModal}
                overlayClassName="overlay"
            >
                <div className="modal">
                    <div className="modal-section">
                        <div className="modal-img-section">
                            <img className="modal-img" src={img} alt={name} />
                        </div>
                        <div className="modal-description-section">
                            <p className="modal-title">{name}</p>
                            <p className="modal-role">{role}</p>
                            <hr className="separator" />
                            <p className="modal-description">{description}</p>
                        </div>
                    </div>
                    <div className="modal-close">
                        <IoIosCloseCircleOutline className="close-icon" onClick={toggleModal} />
                    </div>
                </div>
            </Modal>
            <img className="person-img" src={img} alt={name} />
            <p className="person-title"> {name} </p>
            <p className="person-role"> {role} </p>
        </li>
    );
};

export default Perfil;
