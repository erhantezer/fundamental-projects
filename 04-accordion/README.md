
## App.js
```js

import { useState } from "react";
import data from "./helper/data";
import Question from "./pages/Question";


function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question} />
              )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

```

## Question.js
```js

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [show, setShow] = useState(false);
    
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShow(!show)}>
                    {show ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {show && <p>{info}</p>}
        </article>
    )
}

export default Question

```