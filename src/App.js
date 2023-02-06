import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import AddModal from './components/AddModal';
import AddForm from './components/AddForm';
import EditModal from './components/EditModal';
import EditForm from './components/EditForm';
import Table from './components/Table'
import { useDispatch } from 'react-redux';
import { showAddModal } from './reducers/addModalSlice';

function App() {

  const dispatch = useDispatch();

  return (
    <div className='container'>
      <Header backgroundColor='aliceblue'>NOTAS DA TURMA - MATEMÁTICA</Header>
      <div className='text-center py-10px'>
        <Button className='w-25' variant='success' onClick={() => { dispatch(showAddModal()) }}>Cadastrar novo aluno</Button>
      </div>
      <AddModal>
        <AddForm></AddForm>
      </AddModal>
      <EditModal>
        <EditForm></EditForm>
      </EditModal>
      <Table></Table>
    </div>
  )
}

export default App;
