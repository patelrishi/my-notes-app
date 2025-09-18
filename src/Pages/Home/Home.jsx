
import { Fragment } from 'react/jsx-runtime';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Footer } from '../../components/Footer/Footer';
import { Consumer } from '../../Context/Context';
import { NotesCard } from '../../components/NotesCard/NotesCard';

export const Home = () => {

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

  const pinnedNotes = notes?.length > 0 && notes.filter(({ ispinned }) => ispinned); //ths is means separate pinned and unpinned cards logic
  const UnpinnedNotes = notes?.length > 0 && notes.filter(({ ispinned }) => !ispinned);

  return (
    <Fragment>
      <Navbar />
      <main className='flex gap-3 overflow-x-hidden'>
        <Sidebar />
        <div className='m-8 overflow-hidden w-full' >
          <div className='flex flex-col w-[630px] h-[270px] mt-2 justify-self-center shadow-2xl rounded-2xl bg-purple-200 '>
            <div className='flex flex-col w-[530px] mt-2 self-center relative  '>
              <input value={title} className='border-none p-5 bg-purple-200 outline-none h-[100px] text-2xl focus:outline-none rounded-t-2xl' placeholder='enter title' onChange={onTitleChange} />
              <textarea value={text} className='border-none p-5 h-[150px] bg-purple-200 focus:outline-none text-2xl rounded-b-2xl ' placeholder='enter text' onChange={onTextChange} />
              <span className='-mt-8 text-3xl text-zinc-500  ' >You Can Note AnyThing !</span>
              <button className='buttom-0 right-0 bottom-2 bg-purple-950 text-white rounded-lg  h-[36px] w-[60px] absolute ' disabled={title.length === 0} onClick={onAddClick}>
                <span className="btn ">add</span>
              </button>
              
            </div>
          </div>
          <div className='h-[20px] ml-24 mt-4'>
              {
            message && <h1 className='text-green-800 font-mono text-2xl h-[200px] w-[600px] relative'> {message}</h1>
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
              pinnedNotes?.length > 0 && <h3>other Notes</h3>
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
      <Footer />
    </Fragment>
  )
}
