import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const Submenu = () => {
    const { submenu, page, location } = useGlobalContext();
    const container = useRef();
    const [colums, setColums] = useState('col-2')

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