import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
    const { submenu, page, location } = useGlobalContext();
    const container = useRef();
    const [colums, setColums] = useState('col-2');

    useEffect(() => {
        setColums("col-2");
        const sub = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        console.log(links);
        if (links.length === 3) {
            setColums('col-3')
        }
        if (links.length > 3) {
            setColums('col-4')
        }
    }, [page, location, links])

    return (
        <aside className={`${submenu ? 'submenu show' : 'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${colums}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link
                        return (
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu