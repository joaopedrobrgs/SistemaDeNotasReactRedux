import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eraseStudent } from "../reducers/studentsSlice";
import { selectStudent } from "../reducers/selectStudentSlice";
import { showHideEditModal } from "../reducers/editModalSlice";

function Table() {

    const students = useSelector((state) => {return state.students})
    const dispatch = useDispatch();

    function aprobbation(student) {
        if (Number(student.firstTest) + Number(student.secondTest) + Number(student.seminary) >= 7) {
            return 'Aprovado'
        } else {
            return 'Não Aprovado'
        }
    }
    function handleSelectStudent(student) {
        let select = students.filter((element) => {
            return element.id == student.id;
        })
        dispatch(selectStudent(select[0]))
        dispatch(showHideEditModal('SHOW'));
    }
    function handleEraseStudent(student) {
        if (window.confirm("Você tem certeza disso?\nClique em OK para confirmar ou em CANCEL para cancelar a ação.")) {
            dispatch(eraseStudent(student.id))
        }
        else {
        }
    }
    return (
        <table className="w-100 bg-aliceblue rounded">
            <thead className="text-center">
                <tr>
                    <th>Nome</th>
                    <th>P1</th>
                    <th>P2</th>
                    <th>Seminário</th>
                    <th>Total</th>
                    <th>Aprovação</th>
                    <th className="text-red">Edit/Erase</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.firstTest}</td>
                            <td>{student.secondTest}</td>
                            <td>{student.seminary}</td>
                            <td>{Number(student.firstTest) + Number(student.secondTest) + Number(student.seminary)}</td>
                            <td>{aprobbation(student)}</td>
                            <td>
                                <button onClick={() => {handleSelectStudent(student)}}><i className="bi bi-pencil"></i></button>
                                <button onClick={() => {handleEraseStudent(student)}}><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;


