import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch, useSelector } from "react-redux";
import { showHideEditModal } from "../reducers/editModalSlice";

function EditModal(props) {

    const editModal = useSelector((state)=>{return state.editModal});
    const dispatch = useDispatch();

    return (
        <div id='editModal' className={editModal ? "modalContainer" : "modalContainer hide"}>
            <div className="modalCard">
                <CloseButton onClick={()=>{dispatch(showHideEditModal('HIDE'))}} className="float-end" />
                {props.children}
            </div>
        </div>
    )
}

export default EditModal;