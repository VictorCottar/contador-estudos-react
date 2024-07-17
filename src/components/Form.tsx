import Button from './Button';

export default function Form() {
    return (
        <form className='max-w-[700px] px-16 py-12 bg-slate-900 flex flex-col space-y-8 rounded-lg shadow-shape'>
            <div className='flex flex-col space-y-3'>
            <div className='flex gap-2 items-center'>
                <label htmlFor='tarefa' className='text-3xl font-medium'>
                    Adicione um novo estudo
                </label>
                </div>    
                <input
                    className='p-3 rounded-lg bg-slate-600 focus:outline-none shadow-shape'
                    type="text"
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className='flex flex-col space-y-3 mt-5'>
                <label htmlFor='tempo' className='text-3xl font-medium'>
                    Tempo
                </label>
                <input
                    className='p-3 rounded-lg bg-slate-600 focus:outline-none [color-scheme:dark] shadow-shape'
                    type="time"
                    step={1}
                    name='tempo'
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <Button />
        </form>
    );

}