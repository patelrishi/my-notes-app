
import logo from '../../assets/Note-Icon.png';

export const Navbar = ({open, setOpen}) => {
  
  return (
        <header className='flex w-full bg-purple-950 px-4 py-2 gap-3  border-b-4 border-cyan-100'>
            <div className=' flex item-center gap-3'>
                <img src={logo} alt='logo' className='w-10 md:w-12'/>
                <h3 className='text-sky-50 text-2xl md:text-5xl font-bold'>NoteBook</h3>
            </div>

            {/*hamburger */}

            <button className='md:hidden text-white ml-36' onClick={()=>setOpen(!open)}>
                <span className="material-icons text-3xl"> menu </span>
            </button>
        </header>
  )
}       