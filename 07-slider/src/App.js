import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
import { useGlobalContext } from './context';

function App() {
const [index, setIndex] = useState(0);
const {people, setPeople} = useGlobalContext();



  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        
      </div>
    </section>
  );
}

export default App;
