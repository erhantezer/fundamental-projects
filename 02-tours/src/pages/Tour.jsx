import React from 'react'

const Tour = ({id, image, info, name, price }) => {

    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                    {}
                </p>
            </footer>
        </article>
    )
}

export default Tour