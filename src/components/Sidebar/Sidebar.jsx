
import { NavLink } from 'react-router-dom';

export const Sidebar = () => { 
    const styles = 'flex text-align-center gap-1 rounded-r-full p-0.5 w-[90px] md:w-[150px]' 
    const getstyle=({isActive})=>{
        return isActive ? `text-white bg-indigo-800 ${styles}` : `hover:bg-indigo-800 hover:text-white ${styles}`;
    }

    return (
        <>
            <aside className='flex flex-col bg-violet-100 gap-1 md:gap-3 border-gray-200 md:min-h-screen p-1 md:p-2 text-xsm md:text-xl'> {/*md:min-h-screen */}
                <NavLink to='/'className= {getstyle} >
                    <span className="material-icons-outlined p-0 md:p-1 text-xs md:text-2xl ">
                        home
                    </span>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/archive' className={getstyle}>
                    <span className="material-icons-outlined p-0 md:p-1 text-xs md:text-2xl ">
                        archive
                    </span>
                    <span>Archive</span>
                </NavLink>
                <NavLink to='/important' className={getstyle}>
                    <span className="material-icons-outlined p-0 md:p-1 text-xs md:text-2xl ">
                        label_important
                    </span>
                    <span>Important</span>
                </NavLink>
                <NavLink to='/delete' className= {getstyle}>
                    <span className="material-icons-outlined p-0 md:p-1 text-xs md:text-2xl ">
                        restore_from_trash
                    </span>
                    <span>Bin</span>
                </NavLink>
            </aside>
        </>
    )
}
