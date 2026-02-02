
import { Fragment } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Consumer } from '../../Context/Context';
import { NotesCard } from '../../components/NotesCard/NotesCard';

export const Home = ({open, setOpen}) => {

  const { title, text, notes, notesDispatch, message } = Consumer();

  const onTitleChange = (e) => {
    notesDispatch({
      type: 'TITLE',
      payload: e.target.value
    })
  }
  const onTextChange = (e) => {
    notesDispatch({
      type: 'TEXT',
      payload: e.target.value
    })
  }
  const onAddClick = (e) => {
    notesDispatch({
      type: 'ADD_NOTES'
    })
    notesDispatch({
      type: 'CLEAR'
    })
  }

  const pinnedNotes = notes?.length > 0 && notes.filter(({ ispinned }) => ispinned); //this is means separate pinned and unpinned cards logic
  const UnpinnedNotes = notes?.length > 0 && notes.filter(({ ispinned }) => !ispinned);

  return (
    <Fragment>
      <Navbar open={open} setOpen={setOpen}  />
      <div className='flex min-h-screen'>

        {/*Desktop view */}
        <aside className='hidden md:block w-54 shrink-0'>
          <Sidebar />
        </aside>

        {/*Mobile view */}
        <aside  className={` fixted top-[56px] left-0  z-50 h-[calc(30vh-56px)]
                          w-[100px] sm:w-[100px] bg-violet-100 md:hidden
                          transform transition-transform duration-500
                          ${open ? "translate-x-0" : "-translate-x-full"}`} >
          <Sidebar />
        </aside>

      <main className='flex-1 gap-3 overflow-x-hidden'> {/*flex flex-col w-[330px] mt-2 self-center relative */}
        
        <div className='m-8 overflow-hidden w-full' >
          <div className=' '>
            <div className=' flex flex-col w-full max-w-[90%] max-w-[250px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[500px] p-3 mt-2 justify-self-center shadow-2xl rounded-2xl bg-blue-200'>
              <input value={title} className='border-none p-5 bg-blue-200 outline-none h-[10px] sm:h-[20px] md:h-[50px]  md:text-2xl focus:outline-none rounded-t-2xl' placeholder='enter title' onChange={onTitleChange} />
              <textarea value={text} className='border-none p-5 h-[50px] sm:h-[50px] md:h-[100px] bg-blue-200 focus:outline-none  md:text-2xl rounded-b-2xl ' placeholder='enter text' onChange={onTextChange} />
              <span className=' sm:mt-2 md:-mt-8 sm:text-1xl md:text-3xl text-zinc-500 ' >You Can Note AnyThing !</span>
              <div className='text-end' >
                <button className=' bg-purple-950 text-white rounded-lg  h-[36px] w-[60px]  ' disabled={title.length === 0} onClick={onAddClick}>
                <span className="btn ">add</span>
              </button>
              </div>
              
            </div>
          </div>
          <div className='h-[20px]  md:ml-24 md:mt-4'>
              {
            message && <h1 className='text-green-800 font-mono text-sm sm:text-sm md:text-2xl h-[200px] max-w-[600px] relative'> {message}</h1>
          }
          </div>

          <div className='mt-10 ml-0 flex flex-col'>
            { //this is pinned part
              pinnedNotes?.length > 0 && (
                <div className='flex flex-wrap gap-1'>
                  <span>Pin Notes</span>
                  <div className='flex flex-wrap gap-1' >
                    {
                      pinnedNotes?.length > 0 && pinnedNotes.map(({ title, text, id, ispinned }) => (
                        <NotesCard key={id} title={title} text={text} id={id} ispinned={ispinned} />
                      ))
                    }
                  </div>

                </div>
              )
            }

            { //this is unpinned part
              UnpinnedNotes?.length > 0 && <h3>other Notes</h3>
            }
            <div className='flex flex-wrap'>
              {
                UnpinnedNotes?.length > 0 && UnpinnedNotes.map(({ title, text, id, ispinned }) => (
                  <NotesCard key={id} title={title} text={text} id={id} ispinned={ispinned} />
                ))
              }
            </div>
          </div>
        </div>
      </main>
      </div>
    </Fragment>
  )
}
