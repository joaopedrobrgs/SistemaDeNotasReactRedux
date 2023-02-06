import { createSlice } from "@reduxjs/toolkit"

export const selectStudentSlice = createSlice({
    name: 'selectStudent',
    initialState: [],
    reducers: {
        selectStudent: {
            reducer: (state, action) => {
                const payload = JSON.parse(action.payload);
                return state = payload;
            },
            prepare: (student) => {
                return{
                    payload: JSON.stringify(student)
                }
            },
        },
    }
})

export const { selectStudent } = selectStudentSlice.actions;

export default selectStudentSlice.reducer;