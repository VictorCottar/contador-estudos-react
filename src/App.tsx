import { useState } from 'react';
import Form from './components/Form';
import List from './components/List/List';
import Timer from './components/Timer';
import { TarefaProps } from './types/tarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<TarefaProps[] | []>([]); 

  return (
    <>
      <div className='w-screen h-screen flex flex-row justify-center items-center space-y-5 gap-2'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Form setTarefas={setTarefas}/>
          <Timer />
        </div>
        <div className=''>
          <List tarefas={tarefas}/>
        </div>
      </div>

    </>
  )
}
