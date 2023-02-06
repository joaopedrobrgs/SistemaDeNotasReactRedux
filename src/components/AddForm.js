import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../reducers/studentsSlice";
import { hideAddModal } from '../reducers/addModalSlice';

function AddForm() {

    const students = useSelector((state) => {return state.students})
    const dispatch = useDispatch();

    const [id, setId] = useState(Math.random());
    const [name, setName] = useState('');
    const [firstTest, setFirstTest] = useState('');
    const [secondTest, setSecondTest] = useState('');
    const [seminary, setSeminary] = useState('');

    function handleAddStudent(event) {
        event.preventDefault();
        if (id && name && firstTest && secondTest && seminary) {
            dispatch(addStudent(id, name, firstTest, secondTest, seminary))
            console.log(students);
            dispatch(hideAddModal());
            setName('');
            setFirstTest('');
            setSecondTest('');
            setSeminary('');
            setId(Math.random())
        }
    }

    return (
        <form className='formContainer'>
            <input type='text' value={id} readOnly hidden></input>
            <div className="formContent">Nome do aluno: <input onInput={(event) => { setName(event.target.value) }} type='text' value={name}></input></div>
            <div className="formContent">P1: <input onInput={(event) => { setFirstTest(event.target.value) }} type='number' min='0' max='3' value={firstTest}></input></div>
            <div className="formContent">P2: <input onInput={(event) => { setSecondTest(event.target.value) }} type='number' min='0' max='3' value={secondTest}></input></div>
            <div className="formContent">Seminário: <input onInput={(event) => { setSeminary(event.target.value) }} type='number' min='0' max='4' value={seminary}></input></div>
            <Button onClick={handleAddStudent} variant="success">Adicionar Aluno</Button>
        </form>
    )
}

export default AddForm;



