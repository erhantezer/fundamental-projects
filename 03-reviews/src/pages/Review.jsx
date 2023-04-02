import { useGlobalContext } from '../context';
import people from '../helper/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import usePrevPer from "../hooks/usePrevPer";
import useNextPer from "../hooks/useNextPer";
import useRandomPer from "../hooks/useRandomPer";

const Review = () => {
    const { name, job, image, text } = useGlobalContext();
    const { prevNum } = usePrevPer();
    const { nextNum } = useNextPer();
    const { randomPerson } = useRandomPer();
    console.log(people)
    
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevNum}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextNum}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    )
}

export default Review