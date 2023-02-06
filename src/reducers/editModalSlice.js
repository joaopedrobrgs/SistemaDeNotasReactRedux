import { createSlice } from "@reduxjs/toolkit"

export const editModalSlice = createSlice({
    name: 'editModal',
    initialState: false,
    reducers: {
        showHideEditModal: {
            reducer: (state, action) => {
                switch(action.payload){
                    case 'SHOW':
                        return state = true;
                    case 'HIDE':
                        return state = false;
                    default:
                        return state;
                }
            }
        },
    }
})

export const { showHideEditModal } = editModalSlice.actions;

export default editModalSlice.reducer;