

const Photo = () => {
    return (
        <article className='photo'>
            <img className='photo-grid' src={null} alt={null} />
            <div className='photo-info'>
                <div>
                    <h4>{ }</h4>
                    <p>{ } likes</p>
                </div>
                <div>
                    <p>{ }</p>
                </div>
                <a href={null}>
                    <img className='user-img' src={null} alt={null} />
                </a>
            </div>
        </article>
    )
}

export default Photo;