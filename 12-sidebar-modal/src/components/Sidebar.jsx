import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links, social } from "../helper/data";

const Sidebar = () => {
    const { isSidebar, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div>
                <img src="" alt="" />
                <button onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar