
# Slider

## App.js
```js
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

function App() {
const [index, setIndex] = useState(0);
const {people, setPeople} = useGlobalContext();

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index,people]);


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    },5000)
    return () => {
      clearInterval(slider)
    };
  }, [index]);


  console.log(index)
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const {id, name, image, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position}  key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
            )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

```


## context.js

```js
import {createContext, useContext, useState} from "react";
import data from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = ({children}) => {
    const [people, setPeople] = useState(data);

    return(
        <AppContext.Provider value={{ people, setPeople }}>
                {children}
        </AppContext.Provider>
        )
}
```


## 

```js
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const Alternative = () => {
    const [index, setIndex] = useState(0);
    const { people, setPeople } = useGlobalContext();

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if(index > people.length -1) {
                index = 0
            }
            return index
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if(index < 0) {
                index = people.length - 1
            }
            return index
        })
    }


    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > people.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [people])

    return (
        <section className='section'>
            <div className='title'>
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className='section-center'>
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person

                    let position = 'nextSlide'
                    if (personIndex === index) {
                        position = 'activeSlide'
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='person-img' />
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}
                <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Alternative
```


## index.css
```css
/*
=============== 
Variables
===============
*/
:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(21, 91%, 17%);
  --clr-primary-2: hsl(21, 84%, 25%);
  --clr-primary-3: hsl(21, 81%, 29%);
  --clr-primary-4: hsl(21, 77%, 34%);
  --clr-primary-5: hsl(21, 62%, 45%);
  --clr-primary-6: hsl(21, 57%, 50%);
  --clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}
/*
=============== 
Slider
===============
*/
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.title h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}
.title span {
  font-size: 0.85em;
  color: var(--clr-primary-5);
  margin-right: 1rem;
  font-weight: 700;
}
.section-center {
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
}
.person-img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
}
article h4 {
  text-transform: uppercase;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
}
.title {
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-grey-3);
}
.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);
}
.icon {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--clr-primary-5);
}
.prev,
.next {
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}
.prev:hover,
.next:hover {
  background: var(--clr-primary-5);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
@media (min-width: 800px) {
  .text {
    max-width: 45em;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}

```