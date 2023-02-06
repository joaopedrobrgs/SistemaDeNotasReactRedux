import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { editStudent } from "../reducers/studentsSlice";
import { showHideEditModal } from "../reducers/editModalSlice";

function EditForm() {

    const selectedStudent = useSelector((state) => {return state.selectStudent}) 
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [firstTest, setFirstTest] = useState('');
    const [secondTest, setSecondTest] = useState('');
    const [seminary, setSeminary] = useState('');

    useEffect(()=>{
        setId(selectedStudent.id);
        setName(selectedStudent.name);
        setFirstTest(selectedStudent.firstTest);
        setSecondTest(selectedStudent.secondTest);
        setSeminary(selectedStudent.seminary);
    }, [selectedStudent])

    function handleEditStudent(event) {
        event.preventDefault();
        if (id && name && firstTest && secondTest && seminary) {
            dispatch(editStudent(id, name, firstTest, secondTest, seminary));
            dispatch(showHideEditModal("HIDE"));
        }
    }
    return (
        <form className='formContainer'>
            <input type='text' value={id} readOnly hidden></input>
            <div className="formContent">Nome do aluno: <input type='text' value={name} onChange={(event) => {setName(event.target.value)}}></input></div>
            <div className="formContent">P1: <input type='number' value={firstTest} min='0' max='3' onChange={(event) => {setFirstTest(event.target.value)}}></input></div>
            <div className="formContent">P2: <input type='number' value={secondTest} min='0' max='3' onChange={(event) => {setSecondTest(event.target.value)}}></input></div>
            <div className="formContent">Seminário: <input type='number' value={seminary} min='0' max='4' onChange={(event) => {setSeminary(event.target.value)}}></input></div>
            <Button onClick={handleEditStudent} variant="info">Editar Aluno</Button>
        </form>
    )
}

export default EditForm;