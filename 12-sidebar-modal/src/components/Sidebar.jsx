import { useGlobalContext } from "../context";
import { links, social } from "../helper/data";

const Sidebar = () => {
    const { isSidebar, closeSidebar } = useGlobalContext();

    return (
        <aside>
            <div>
                <img src="" alt="" />
                <button>
                    
                </button>
            </div>
        </aside>
    )
}

export default Sidebar