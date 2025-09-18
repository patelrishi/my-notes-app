
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const styles = 'flex text-align-center gap-1 rounded-r-full p-0.5'
    const getstyle=({isActive})=>{
        return isActive ? `text-white bg-indigo-800 ${styles}` : `hover:bg-indigo-800 hover:text-white ${styles}`;
    }

    return (
        <>
            <aside className='flex flex-col bg-violet-100 gap-3 border-r-2 border-gray-200 w-[180px] min-h-screen p-3 text-2xl'>
                <NavLink to='/'className= {getstyle} >
                    <span className="material-icons-outlined p-1">
                        home
                    </span>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/archive' className={getstyle}>
                    <span className="material-icons-outlined p-1">
                        archive
                    </span>
                    <span>Archive</span>
                </NavLink>
                <NavLink to='/important' className={getstyle}>
                    <span className="material-icons-outlined p-1" >
                        label_important
                    </span>
                    <span>Important</span>
                </NavLink>
                <NavLink to='/delete' className= {getstyle}>
                    <span className="material-icons-outlined p-1">
                        restore_from_trash
                    </span>
                    <span>Bin</span>
                </NavLink>
            </aside>
        </>
    )
}
