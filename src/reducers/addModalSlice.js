import { createSlice } from "@reduxjs/toolkit"

export const addModalSlice = createSlice({
    name: 'addModal',
    initialState: false,
    reducers: {
        showAddModal: {
            reducer: (state) => {
                return state = true;
            }
        },
        hideAddModal: {
            reducer: (state) => {
                return state = false;
            }
        }
    }
})

export const { showAddModal, hideAddModal } = addModalSlice.actions;

export default addModalSlice.reducer;