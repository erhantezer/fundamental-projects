import useFetchData from "../hooks/useFetchData";


const List = ({myData}) => {
    

    return (
        <>
            {myData.map((person) => {
                const { id, name, image, age } = person;
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List