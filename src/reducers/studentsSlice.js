import { createSlice } from "@reduxjs/toolkit"
import Student from "../components/Student"

export const studentsSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {
        addStudent: {
            reducer: (state, action) => {
                const payload = JSON.parse(action.payload);
                return [...state, payload]
            },
            prepare: (id, name, firstTest, secondTest, seminary) => {
                const student = new Student(id, name, firstTest, secondTest, seminary);
                return {
                    payload: JSON.stringify(student)
                }
            }
        },
        editStudent: {
            reducer: (state, action) => {
                const payload = JSON.parse(action.payload);
                return state.map((student) => {
                    if (student.id === payload.id) {
                        student = payload;
                    }
                    return student;
                })
            },
            prepare: (id, name, firstTest, secondTest, seminary) => {
                const student = new Student(id, name, firstTest, secondTest, seminary);
                return {
                    payload: JSON.stringify(student)
                }
            }
        },
        eraseStudent: {
            reducer: (state, action) => {
                return state.filter((student) => {
                    return student.id != action.payload
                })
            },
            prepare: (id) => {
                return {
                    payload: id
                }
            }
        },
    }
})

export const { addStudent, editStudent, eraseStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
