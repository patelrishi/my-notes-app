import { Fragment } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { NotesCard } from '../../components/NotesCard/NotesCard';
import { Consumer } from '../../Context/Context';

export const Archive = ({open,setOpen}) => {
    const { archive, message } = Consumer();

    return (
        <Fragment>
            <Navbar open={open} setOpen={setOpen} />
            <main className='flex gap-3'>
                <div>
                    <Sidebar />
                </div>
                
                <div className='gap-1'>
                    <div className='flex flex-wrap gap-1'>
                        {
                            archive?.length > 0 && archive.map(({ id, title, text, ispinned }) => ( // here u put {...} instead of (....) it is not showing proper output
                                <NotesCard key={id} id={id} text={text} title={title} ispinned={ispinned} />
                            )) //whenever u mention component in the map then use 'Paranthsis' ( <NotesCard/> ) not use {<NotesCard />} not showing proper output
                        }
                    </div>
                </div>
                <div className='w-full content-center mb-96 relative'>
                    {
                        message && <h1 className='relative text-green-800 font-mono md:text-2xl '> {message}</h1>
                    }
                </div>
            </main>
        </Fragment>
    )
}
