
### Hooks and filter method
```js

import { useGlobalContext } from "../context"


const useRemoveTour = () => {
    const {tours, setTours} = useGlobalContext();

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        //! filter methodu array olan tours içindeki herbir tour objelerine ulaşır ve onun id  lerini gönderdiğimiz id ile
        //! karşılaştırır eğer id eşleşmezse onları alır ve yeniden bir array oluşturur
        setTours(newTours);
    }
    return { removeTour };
}

export default useRemoveTour

```

### Context fetch data
```js
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

const url = 'https://course-api.com/react-tours-project';

export const AppContextProvider = ({ children }) => {
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json()
            setTours(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(tours)

    useEffect(() => {
        fetchTours()
    }, []);

    return (
        <AppContext.Provider value={{ tours, setTours, fetchTours }}>
            {children}
        </AppContext.Provider>
    )
}

```

### Tour show more show less feature
```js
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

```

### Array map iteration method
```js
import React from 'react'
import Tour from './Tour';
import { useGlobalContext } from '../context';

const Tours = () => {
  const {tours} = useGlobalContext()
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  )
}

export default Tours

```

### Tours Project's Tree
```readme
│   .gitignore
│   package.json
│   README.md
│   yarn.lock
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   App.js
    │   context.js
    │   index.css
    │   index.js
    │
    ├───assets
    │       alpata.png
    │       octapull.png
    │       octapull1.png
    │
    ├───components
    │       Footer.jsx
    │       Navbar.jsx
    │
    ├───hooks
    │       useRemoveTour.js
    │
    └───pages
            Tour.jsx
            Tours.jsx
```