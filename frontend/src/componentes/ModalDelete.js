import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

function ModalDelete(show, setShow){
    return(
        <Modal
            show={show}
            onHide={()=>setShow(false)}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    Confirma?
                </ModalTitle>
                <ModalBody>
                    Tem certeza que deseja deletar?
                </ModalBody>
                <ModalFooter>   
                    <Button variant="secondary" onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant="danger" onClick={()=> setShow(false)}>Deletar</Button>
                </ModalFooter>
            </ModalHeader>
        </Modal>
    )
}

export default ModalDelete