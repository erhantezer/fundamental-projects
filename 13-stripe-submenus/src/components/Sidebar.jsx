import { useGlobalContext } from '../context';
import sublinks from '../helper/data';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const {sidebar, closeSidebar} = useGlobalContext();

    return (
        <div className={`${sidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <aside className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className='sidebar-sublinks'>
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a href={url} key={index}>
                                                {icon}
                                                {label}
                                            </a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar