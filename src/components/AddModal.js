import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch, useSelector } from "react-redux";
import { hideAddModal } from "../reducers/addModalSlice";

function AddModal(props) {
    
    const addModal = useSelector((state) => {return state.addModal})
    const dispatch = useDispatch();
    
    return (
        <div id='addModal'className={addModal ? "modalContainer" : "modalContainer hide"}>
            <div className="modalCard">
                <CloseButton onClick={()=>{dispatch(hideAddModal())}} className="float-end" />
                {props.children}
            </div>
        </div>
    )
}

export default AddModal;