import { Fragment } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Consumer } from '../../Context/Context'
import { NotesCard } from '../../components/NotesCard/NotesCard'

export const Important = () => {
    const { impes, message } = Consumer();

    return (
        <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div className='gap-1'>
                    <div className='flex flex-wrap gap-1'>
                        {
                            impes?.length > 0 && impes.map(({ id, text, title, ispinned }) => (
                                <NotesCard key={id} id={id} text={text} title={title} ispinned={ispinned} />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full content-center mb-96 relative'>
                    {
                        message && <h1 className='relative text-green-800 font-mono text-2xl '> {message}</h1>
                    }
                </div>
            </main>
        </Fragment>
    )
}
