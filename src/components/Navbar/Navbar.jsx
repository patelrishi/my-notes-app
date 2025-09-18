
import logo from '../../assets/Note-Icon.png';

export const Navbar = () => {
  return (
        <header className='flex bg-purple-950 px-6 py-2 gap-3  w-screen border-b-4 border-cyan-100'>
            <div className='w-12  '>
                <img src={logo} alt='logo'/>
            </div>
            <h3 className='text-sky-50 text-5xl font-bold'>NoteBook</h3>
            
        </header>
  )
}
