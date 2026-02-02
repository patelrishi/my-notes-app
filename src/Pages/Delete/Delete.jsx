import { Fragment } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Consumer } from '../../Context/Context'
import { NotesCard } from '../../components/NotesCard/NotesCard'

export const Delete = ({open,setOpen}) => {
    const { bin, message,NotesDispatch } = Consumer();

    return (
        <Fragment>
            <Navbar open={open} setOpen={setOpen} />
            <main className='flex gap-3'>
                <div >
                    <Sidebar />
                </div>
                    
                <div className='gap-1'>
                    <div className='flex flex-wrap gap-1'>
                        {
                            bin?.length > 0 && bin.map(({ id, text, title, ispinned }) => (
                                <NotesCard key={id} id={id} text={text} title={title} ispinned={ispinned} />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full content-center mb-96 relative'>
                    {
                        message && <h1 className='relative ml-12 text-green-800 font-mono md:text-2xl '> {message}</h1>
                    }
                </div>

            </main>

        </Fragment>
    )
}
