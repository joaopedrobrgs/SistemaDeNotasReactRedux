import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from './reducers/studentsSlice';
import selectStudentReducer from './reducers/selectStudentSlice';
import addModalReducer from './reducers/addModalSlice';
import editModalReducer from './reducers/editModalSlice';
import { saveState, loadState } from './storage/storageFunctions';

const store = configureStore({
    reducer: {
        students: studentsReducer,
        selectStudent: selectStudentReducer,
        addModal: addModalReducer,
        editModal: editModalReducer,
    },
    preloadedState: {
        students: loadState().students,
    }
});

store.subscribe(()=>{saveState(store.getState())})

export default store;