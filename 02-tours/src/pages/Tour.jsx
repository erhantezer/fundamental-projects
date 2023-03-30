import React, { useState } from 'react'
import useRemoveTour from '../hooks/useRemoveTour';

const Tour = ({id, image, info, name, price }) => {
    const [show, setShow] =useState(false);
    const {removeTour} = useRemoveTour()

    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                    {show ? info : `${info.slice(0,200)}...`}
                    <button onClick={() => setShow(!show)}>
                        {show ? "show less" : "show more"}
                    </button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default Tour